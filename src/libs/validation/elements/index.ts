//Pending:
/*
- Agregar llamada a DA para obtener documento de configuracion
- Agregar Validaciones:
-- Condition
*/

import Conditions from "./conditions";
import { Min, Max } from "./minMax";
import { Types } from "./types";

export interface Ierror {
    Title:       string
    Description: string
    Position:    string
    Type:        string
}

function pushErrors(errorlogs: Ierror[], errors: {Description:string, Title: string}[], errorPos: string): Ierror[] {
    errors.forEach((error) => {
        errorlogs.push({
            Position: errorPos,
            Description: error.Description,
            Title: error.Title,
            Type: "Element Data"
        })
    })
    return errorlogs
}

//Funcion Auxiliar
//Recibe un nombre de segmento y una instancia de un documento de configuracion de EDI de un TD especifico,
//y nos retorna la informacion del segmento con el nombre que haga match.

//Meterle tipado de return con un | para que agarre boolean o el objeto
function getSegmentConfig(name: string, config: any) {
    let counter = 0;
    let loopCounter = 0;
    while(counter < config.length){
        //console.log(config)
        //console.log(config[counter].Segment)
        if (name === config[counter].Segment){
            //console.log("found")
            return config[counter]
        }
        else if (config[counter].Segment === "LOOP"){
            //console.log("LOOP")
            loopCounter = 0;
            //console.log(config[counter].Segments.length)
            while (loopCounter < config[counter].Segments.length){
                if (name === config[counter].Segments[loopCounter].Segment){
                    //console.log("found")
                    return config[counter].Segments[loopCounter];
                }
                else {
                    loopCounter++;
                }
            }
            counter++;
            
        } else {
            counter++;
        }
    }
    console.log("Bromita")
    return false
    //Agregar catch error
}

export default function data(config: any, file: any, delimiters: string[]) {

    let errorLog: Ierror[] = []

    let segpos = 0
    // Moverse por segmentos
    while(segpos < (file.length)){
        let fileseg = file[segpos]
        let configseg: any = getSegmentConfig(fileseg.name, config);
        if (typeof(configseg) === "boolean"){
            console.log("delimitador clown antes")
            segpos++;
            continue;
        }

        //console.log("tipo segmento" + typeof(configseg))
        //console.log(configseg)

        //segmentos
        console.log(fileseg.name)

        const keys = Object.keys(fileseg);

        let elementpos = 0
        let configpos = 0
        
         //String manipulation to have position number of element
        let rawLastPosition = configseg.Elements[configseg.Elements.length -1].Position
            let lastPosition = rawLastPosition.replace(fileseg.name, "")

            //console.log("seg last position")
            //console.log(Number(lastPosition))
            //console.log("file last position")
            //console.log(keys.length -1)

        let errorSeg = fileseg.name;    

        // Moverse por elementos
        while (elementpos < keys.length - 1) { // Exclude last index

            //console.log(elementpos)
            //console.log(lastPosition)

            let errorsElement: {Description: string, Title: string}[] = []

            //Si es el mismo numero, entonces se tiene un segmento con elementos de mas
            if (elementpos === Number(lastPosition)){

                errorLog.push({
                    Position: errorSeg,
                    Description: `Segment ${errorSeg} has more elements than the specifications`,
                    Title: "Extra number of elements for this segment",
                    Type: "Structure"
                })

                console.log(errorSeg + " Error: Extra number of elements for this segment") // Error de estructura segmento LOL
                break;
            }
            //String manipulation to have position number of element
            let rawPosition = configseg.Elements[configpos].Position
            let position = rawPosition.replace(fileseg.name, "")

            //console.log(Number(position) -1)
            //console.log(elementpos)


            const key = keys[elementpos];
            const data = fileseg[key];
            console.log(`Element: ${key}, Data: ${data}`);

            let errorElement = key
            let errorPos = errorSeg

            //Estandarizacion de nombre de elemento para error
            if (Number(errorElement) > 10){
                errorPos = errorPos + "" + errorElement
            }else {
                errorPos = errorPos + "0" + errorElement
            }

            console.log(errorPos)


            if((Number(position) -1) !== (elementpos)){
                //Checar si vacio
                if (data !== "" && errorSeg !== "ISA"){
                    //generar error

                    errorLog.push({
                        Position: errorPos,
                        Description: `Element ${errorPos} is not part of the specifications and should be left empty`,
                        Title: "Empty element has data",
                        Type: "Element Data"
                    })

                    console.log(errorPos + ": Dato No usado tiene dato")
                    
                }
                console.log("hola")
                elementpos++

            } else {

                //Datos de Configuracion de elemento
                //let position = configseg.Elements[configpos].Position
                //let name = configseg.Elements[configpos].Element
                let req = configseg.Elements[configpos].Requirement
                let type = configseg.Elements[configpos].Type
                let min = configseg.Elements[configpos].Min
                let max = configseg.Elements[configpos].Max
                let condition = configseg.Elements[configpos].condition

                //console.log(position);
                //console.log(name);
                //console.log(req);
                //console.log(type);
                //console.log(min);
                //console.log(max);
                //console.log(condition);
                
                //Validacion Datos

                //Min
                let minError:{Description:string, Title: string} = Min(data, min, req)



                //Max
                if (minError.Description === "") {
                    let maxError:{Description:string, Title: string} = Max(data,max)
                    
                    if (maxError.Description !== ""){
                        errorsElement.push(maxError)
                    }

                } else {
                    errorsElement.push(minError)
                }

                //Type
                //cambiar la lista por una referencia a los delimitadores delimiters
                let errorType:{Description:string, Title: string} = Types(data, type, ["*","~"])

                if (errorType.Description !== "") {
                    errorsElement.push(errorType)
                } else {
                    if (condition > 0){
                    let conditionsErrors: {Description:string, Title: string}[] = Conditions(data, condition, file);
                    
                    conditionsErrors.map((error) => errorsElement.push(error) )
                    }
                }


                //Empujar errores con segmento y posicion de elemento a la lista de errores
                // para bd
                errorLog = pushErrors(errorLog, errorsElement, errorPos)
                console.log(errorLog.length)

                //Moverse al siguiente elemento
                elementpos++;
                configpos++;
                console.log("");
            }
        }
        //Moverse al Siguiente Segmento
        segpos++;
    }
    //Imprimir Errores
    if (errorLog.length > 0){
        return errorLog
    } else {
        console.log("Paso el test")
        return errorLog
    }
       
}
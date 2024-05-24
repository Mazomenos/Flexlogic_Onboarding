//Pending:
/*
- Agregar llamada a DA para obtener documento de configuracion
- Agregar Validaciones:
-- Condition
*/

import { Min, Max } from "./minMax";
import { Types } from "./types";
// import { Min, Max } from "./minMax";


//Funcion Auxiliar
//Recibe un nombre de segmento y una instancia de un documento de configuracion de EDI de un TD especifico,
//y nos retorna la informacion del segmento con el nombre que haga match.
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
    //Agregar catch error
}

export default function data(config: any, file: any) {
    

    let segpos = 0

    // Moverse por segmentos
    while(segpos < (file.length)){
        let fileseg = file[segpos]
        let configseg: any = getSegmentConfig(fileseg.name, config)!;
        console.log("tipo segmento" + typeof(configseg))
        console.log(configseg)
        //segmentos
        console.log(fileseg.name)

        const keys = Object.keys(fileseg);

        let elementpos = 0
        // Moverse por elementos
        while (elementpos < keys.length - 1) { // Exclude last index

            const key = keys[elementpos];
            const data = fileseg[key];
            console.log(`Element: ${key}, Data: ${data}`);

            //Datos de Configuracion de elemento
            //let position = configseg.Elements[elementpos].Position
            //let name = configseg.Elements[elementpos].Element
            let req = configseg.Elements[elementpos].Requirement
            let type = configseg.Elements[elementpos].Type
            let min = configseg.Elements[elementpos].Min
            let max = configseg.Elements[elementpos].Max
            //let condition = configseg.Elements[elementpos].condition

            //console.log(position);
            //console.log(name);
            console.log(req);
            console.log(type);
            console.log(min);
            console.log(max);
            //console.log(condition);
            
            //Validacion Datos

            //Min
            let minR:boolean = Min(data, min, req)

            //Max
            if (minR) {
                Max(data,max)
            }

            //Type
            //cambiar la lista por una referencia a los delimitadores
            Types(data, type, ["*","~"])
//             //Type
            

            //Conditions
            
//             //Conditions

            elementpos++;
            console.log("");
          }
//             elementpos++;
//           }

        segpos++;

    }
    
}
//     }
// }
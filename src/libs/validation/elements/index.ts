// //Pending:
// /*
// - Agregar llamada a api para obtener documento de configuracion
// - Agregar Validaciones:
// -- Min
// -- Max
// -- Type
// -- Condition
// */

// import { Min, Max } from "./minMax";


// //Funcion Auxiliar
// //Recibe un nombre de segmento y una instancia de un documento de configuracion de EDI de un TD especifico,
// //y nos retorna la informacion del segmento con el nombre que haga match.
// function getSegmentConfig(name: string, config: [{max: number,min: number, req: string, name: string, elements: []}]) {
//     let counter = 0;
//     while(counter < config.length){
//         if (name === config[counter].name){
//             console.log("found")
//             return config[counter]
//         }
//         else {
//             counter++;
            
//         }
//     }
//     //Agregar catch error
// }

// function min(){
//     console.log("min")
// }

// function max(){
//     console.log("max")
// }

// export default function data() {
//     const file = [
//         {
//             '1': '00',
//             '2': '          ',
//             '3': '00',
//             '4': '          ',
//             '5': 'ZZ',
//             'name': 'ISA'
//         },
//         {
//             '1': 'IB',
//             '2': 'VENDOR',
//             '3': 'AMAZON',
//             'name': 'GS'
//         }
//     ]

//     const config = [
//         {
//             position: 1,
//             max: 2,
//             req: "M",
//             name: "ISA",
//             elements: [
//                 {
//                     position: 1,
//                     name: "isac",
//                     req: "M",
//                     type: "id",
//                     min: 2,
//                     max: 2,
//                     condition: {
//                         codes: [
//                             "ac",
//                             "do",
//                             "di",
//                             "pu"
//                         ]
//                     }
//                 },
//                 {
//                     position: 1,
//                     name: "isac",
//                     req: "M",
//                     type: "id",
//                     min: 2,
//                     max: 2,
//                     condition: {
//                         codes: [
//                             "ac",
//                             "do",
//                             "di",
//                             "pu"
//                         ]
//                     }
//                 },
//                 {
//                     position: 1,
//                     name: "isac",
//                     req: "M",
//                     type: "id",
//                     min: 2,
//                     max: 2,
//                     condition: {
//                         codes: [
//                             "ac",
//                             "do",
//                             "di",
//                             "pu"
//                         ]
//                     }
//                 },
//                 {
//                     position: 1,
//                     name: "isac",
//                     req: "M",
//                     type: "id",
//                     min: 2,
//                     max: 2,
//                     condition: {
//                         codes: [
//                             "ac",
//                             "do",
//                             "di",
//                             "pu"
//                         ]
//                     }
//                 },
//                 {
//                     position: 1,
//                     name: "isac",
//                     req: "M",
//                     type: "id",
//                     min: 2,
//                     max: 2,
//                     condition: {
//                         codes: [
//                             "ac",
//                             "do",
//                             "di",
//                             "pu"
//                         ]
//                     }
//                 },
//             ]
//         },
//         {
//             position: 1,
//             max: 2,
//             req: "M",
//             name: "GS",
//             elements: [
//                 {
//                     position: 1,
//                     name: "isac",
//                     req: "M",
//                     type: "id",
//                     min: 2,
//                     max: 2,
//                     condition: {
//                         codes: [
//                             "ac",
//                             "do",
//                             "di",
//                             "pu"
//                         ]
//                     }
//                 },
//                 {
//                     position: 1,
//                     name: "isac",
//                     req: "M",
//                     type: "id",
//                     min: 2,
//                     max: 2,
//                     condition: {
//                         codes: [
//                             "ac",
//                             "do",
//                             "di",
//                             "pu"
//                         ]
//                     }
//                 },
//                 {
//                     position: 1,
//                     name: "isac",
//                     req: "M",
//                     type: "id",
//                     min: 2,
//                     max: 2,
//                     condition: {
//                         codes: [
//                             "ac",
//                             "do",
//                             "di",
//                             "pu"
//                         ]
//                     }
//                 }
//             ]}
        
        
        
//     ]
//     let segpos = 0


    

//     // Moverse por segmentos
//     while(segpos < (file.length)){
//         let fileseg = file[segpos]
//         let configseg: { max: number; min: number; req: string; name: string; elements: []; } = getSegmentConfig(fileseg.name, config)!;
//         console.log(typeof(configseg))
//         //console.log(configseg)
//         //segmentos
//         console.log(fileseg.name)


//         const keys = Object.keys(fileseg);

//         let elementpos = 0
//         // Moverse por elementos
//         while (elementpos < keys.length - 1) { // Exclude last index

//             const key = keys[elementpos];
//             const data = fileseg[key];
//             console.log(`Element: ${key}, Data: ${data}`);

//             //Datos de Configuracion de elemento
//             let position = configseg.elements[elementpos].position
//             let name = configseg.elements[elementpos].name
//             let req = configseg.elements[elementpos].req
//             let type = configseg.elements[elementpos].type
//             let min = configseg.elements[elementpos].min
//             let max = configseg.elements[elementpos].max
//             let condition = configseg.elements[elementpos].condition

//             console.log(position);
//             console.log(name);
//             console.log(req);
//             console.log(type);
//             console.log(min);
//             console.log(max);
//             console.log(condition);

//             //Validacion Datos

//             //Min
//             let minR:boolean = Min(data, min, req)

//             //Max
//             if (minR) {
//                 Max(data,max)
//             }

//             //Type
            

//             //Conditions

//             elementpos++;
//           }

//         segpos++;

//     }
// }
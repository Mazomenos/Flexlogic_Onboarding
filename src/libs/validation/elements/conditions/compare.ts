import { IcompareData, IcompareStatic, Operator, Source } from "./InterfaceConditions";

function compareStatic(data:string, params: IcompareStatic) {
    switch(params.operator){
        case Operator.EQUAL: {
            if (data !== params.data) {
                console.log("Error: valor no igual")
            } 
            console.log("equal")
            break;
        }
        case Operator.MORE: {
            if (data < params.data) {
                console.log("Error: valor menor al deseado")
            } 
            console.log("more than")
            break;
        }
        case Operator.LESS: { 
            if (data > params.data) {
                console.log("Error: valor mayor al deseado")
            } 
            console.log("less than")
            break;
        }
    }
}



export default function CompareData(data: string, params: IcompareData) {
    switch(params.source){
        case Source.STATIC:
            compareStatic(data, params.data as IcompareStatic)
            console.log("static")
            break;
        case Source.PO:
            console.log("PO")
            break;
        case Source.FILE:
            console.log("File")
            break;
    }
}
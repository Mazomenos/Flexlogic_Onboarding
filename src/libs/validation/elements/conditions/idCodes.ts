import { IcompareCodes } from "./InterfaceConditions"

export default function IdCodes(data:string, params: IcompareCodes): string {
    let count = 0
    while(count < params.codes.length){
        if (params.codes[count] === data){
            console.log("Codigo Valido")
            return ""
        }
        count++
    }
    //Meterle que muestre la lista de codigos
    return "This element doesnt contain a valid code"

}
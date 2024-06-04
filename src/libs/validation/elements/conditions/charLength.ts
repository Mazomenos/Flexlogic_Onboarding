import { IcharLength } from "./InterfaceConditions"


export default function charLength(data:string, params: IcharLength) {
    const chars = data.trim()
    if (chars.length !== Number(params.length)) {
        console.log("Error: El valor no cumple con el numero de caracteres")
    } else {
        console.log("Numero de chars deseado")
    }
} 
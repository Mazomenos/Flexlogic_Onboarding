import { IcharLength } from "./InterfaceConditions"


export default function charLength(data:string, params: IcharLength): string {
    const chars = data.trim()
    if (chars.length !== Number(params.length)) {
        return "Length of content in Element must be " + params.length + " characters" 
    } else {
        return ""
    }
} 
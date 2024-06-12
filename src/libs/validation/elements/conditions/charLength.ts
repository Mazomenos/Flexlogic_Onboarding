import { IcharLength } from "./InterfaceConditions"


export default function charLength(data: string, params: IcharLength): {Description: string, Title: string} {
    const chars = data.trim()
    if (chars.length !== Number(params.length)) {
        return {
            Description: `The Data in this Element must be ${params.length} Characters long`,
            Title: "Characther Length"
        }
    } else {
        return {
            Description: "",
            Title: ""
        }
    }
} 
import { z } from "zod"
import { IdecimalCondition } from "./InterfaceConditions"

export default function DecimalPosition(data: string, params: IdecimalCondition) {
    const decimalPosition = Number(params.decimals)
    const parts = data.split('.')
    const schema = z.string().length(decimalPosition)
    const result = schema.safeParse(parts[1])
    console.log(result)
    if (result.success === false){
        return "This element should have " + params.decimals + " decimals"
    } else {
        return ""
    }
}
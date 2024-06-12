import { z } from "zod"
import { IdecimalCondition } from "./InterfaceConditions"

export default function DecimalPosition(data: string, params: IdecimalCondition): {Description: string, Title: string} {
    const decimalPosition = Number(params.decimals)
    const parts = data.split('.')
    const schema = z.string().length(decimalPosition)
    const result = schema.safeParse(parts[1])
    console.log(result)
    if (result.success === false) {
        return {
            Description: `This element must have "${decimalPosition}" decimal spaces`,
            Title: "Decimal Position"
        }
    } else {
        return {
            Description: "",
            Title: ""
        }
    }
}
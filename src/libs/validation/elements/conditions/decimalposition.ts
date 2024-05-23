import { z } from "zod"

interface IDecimalCondition {
    decimals: string
}

export default function DecimalPosition(data: string, params: IDecimalCondition) {
    const decimalPosition = Number(params.decimals)
    const parts = data.split('.')
    const schema = z.string().length(decimalPosition)
    const result = schema.safeParse(parts[1])
    console.log(result)
}
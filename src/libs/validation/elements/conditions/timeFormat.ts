import { z } from "zod"
import { IdateAndTimeFormat } from "./InterfaceConditions"

export default function TimeFormat(data: string, params: IdateAndTimeFormat) {
    const format = params.format
    let regularExp = ""
    switch (format) {
        case 'HHMM':
            regularExp = '^(?:[01][0-9]|2[0-3])[0-5][0-9]$'
            break;
        case 'HHMMSS':
            regularExp = '^(?:[01][0-9]|2[0-3])[0-5][0-9][0-5][0-9]$'
            break;
        case 'HHMMSSDD':
            regularExp = '^(?:[01][0-9]|2[0-3])[0-5][0-9][0-5][0-9][0-9][0-9]$'
            break;
    }
    const schema = z.string().regex(new RegExp(regularExp))
    const result = schema.safeParse(data)
    if (result.success === false){
        return "Time format should be: " + params.format
    } else {
        return ""
    }
}
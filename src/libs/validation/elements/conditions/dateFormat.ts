import { z } from "zod"
import { IdateAndTimeFormat } from "./InterfaceConditions"


export default function DateFormat(data: string, params: IdateAndTimeFormat) {
    const format = params.format
    let regularExp = ""
    switch (format) {
        case 'YYMMDD':
            regularExp = '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$'
            break;
        case 'CCYYMMDD':
            regularExp = '^[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$'
            break;
    }
    const schema = z.string().regex(new RegExp(regularExp))
    const result = schema.safeParse(data)
    console.log(result)
    if (result.success === false) {
        return "This element must be in a '" + format + "' format"
    } else {
        return ""
    }
}
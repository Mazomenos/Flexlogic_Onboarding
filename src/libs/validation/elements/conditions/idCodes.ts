import { IcompareCodes } from "./InterfaceConditions"

export default function IdCodes(data: string, params: IcompareCodes) {
    let count = 0
    while (count < params.codes.length) {
        if (params.codes[count] === data) {
            return ""
        }
        count++
    }

    return "The element is not a valid ID code"

}
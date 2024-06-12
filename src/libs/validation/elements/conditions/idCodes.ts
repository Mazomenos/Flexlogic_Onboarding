import { IcompareCodes } from "./InterfaceConditions"

export default function IdCodes(data: string, params: IcompareCodes): {Description: string, Title: string} {
    let count = 0
    while (count < params.codes.length) {
        if (params.codes[count] === data) {
            return {
                Description: "",
                Title: ""
            }
        }
        count++
    }

    return {
        Description: "The element is not a valid ID code",
        Title: "ID Code"
    }

}
import { IcompareData, IcompareStatic, Operator, Source } from "./InterfaceConditions";

function compareStatic(data: string, params: IcompareStatic): {Description: string, Title: string} {
    switch (params.operator) {
        case Operator.EQUAL: {
            if (data !== params.data) {
                return {
                    Description: `The Element Data must be EQUAL to ${params.data}`,
                    Title: "Data Information"
                }
            }
            return {
                Description: "",
                Title: ""
            }
        }
        case Operator.MORE: {
            if (data < params.data) {
                return {
                    Description: `The Element Data value must be MORE than ${params.data}`,
                    Title: "Data Information"
                }
            }
            return {
                Description: "",
                Title: ""
            }
        }
        case Operator.LESS: {
            if (data > params.data) {
                return {
                    Description: `The Element Data value must be LESS than ${params.data}`,
                    Title: "Data Information"
                }
            }
            return {
                Description: "",
                Title: ""
            }
        }
    }
}



export default function CompareData(data: string, params: IcompareData): {Description: string, Title: string} {
    let result = {Description: "", Title: ""}
    switch (params.source) {
        case Source.STATIC:
            result = compareStatic(data, params.data as IcompareStatic)
            console.log("static")
            break;
        case Source.PO:
            console.log("PO")
            break;
        case Source.FILE:
            console.log("File")
            break;
    }
    return result
}
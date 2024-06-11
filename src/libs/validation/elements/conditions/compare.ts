import { IcompareData, IcompareStatic, Operator, Source } from "./InterfaceConditions";

function compareStatic(data: string, params: IcompareStatic) {
    switch (params.operator) {
        case Operator.EQUAL: {
            if (data !== params.data) {
                return "Value must be equal to " + params.data
            }
            return ""
        }
        case Operator.MORE: {
            if (data < params.data) {
                return "Value must be higher than " + params.data
            }
            return ""
        }
        case Operator.LESS: {
            if (data > params.data) {
                return "Value must be less than " + params.data
            }
            return ""
        }
    }
}



export default function CompareData(data: string, params: IcompareData) {
    let result = ""
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
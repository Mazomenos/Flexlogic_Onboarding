import CompareData from "./conditions/compare"
import IdCodes from "./conditions/idCodes"
import DateFormat from "./conditions/dateFormat"
import DecimalPosition from "./conditions/decimalposition"
import charLength from "./conditions/charLength"
import TimeFormat from "./conditions/timeFormat"

import { Iconditions, IcharLength, IdecimalCondition, IcompareCodes, IcompareData, IdateAndTimeFormat } from "./conditions/InterfaceConditions"


export default function Conditions(data: string, conditions: Iconditions[], file: Object): string {
    let result = "";
    
    //Conditions Loop
    conditions.forEach(condition => {
        switch (condition.type) {
            case 'compareData':
                CompareData(data, condition.params as IcompareData)
                console.log("compareData");
                break;

            case 'decimalPosition':
                DecimalPosition(data, condition.params as IdecimalCondition)
                console.log("decimalPosition");
                break;

            case 'dateFormat':
                DateFormat(data, condition.params as IdateAndTimeFormat)
                console.log("dateFormat");
                break;

            case 'timeFormat':
                console.log("timeFormat");
                TimeFormat(data, condition.params as IdateAndTimeFormat)
                break;

            case 'charLength':
                charLength(data, condition.params as IcharLength)
                console.log("charLength");
                break;
            case 'idCodes':
                IdCodes(data, condition.params as IcompareCodes)
                console.log("idCodes");
                break;
        }
    });

    if (result !== ""){
        console.log(result)
        return result
    } else {
        return ""
    }
}

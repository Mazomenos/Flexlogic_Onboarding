import CompareData from "./conditions/compare"
import IdCodes from "./conditions/idCodes"
import DateFormat from "./conditions/dateFormat"
import DecimalPosition from "./conditions/decimalposition"
import charLength from "./conditions/charLength"
import TimeFormat from "./conditions/timeFormat"

import { Iconditions, IcharLength, IdecimalCondition, IcompareCodes, IcompareData, IdateAndTimeFormat } from "./conditions/InterfaceConditions"


export default function Conditions(data: string, conditions: Iconditions[], file: Object): {Description: string, Title: string}[] {

    let errorLog: {Description: string, Title: string}[]= []


    //Conditions Loop
    conditions.forEach(condition => {
        let error; 
        switch (condition.type) {
            case 'compareData':
                error = CompareData(data, condition.params as IcompareData)
                if (error.Description === ""){
                    errorLog.push(error)
                }
                console.log("compareData");
                break;

            case 'decimalPosition':
                error = DecimalPosition(data, condition.params as IdecimalCondition)
                if (error.Description === ""){
                    errorLog.push(error)
                }
                console.log("decimalPosition");
                break;

            case 'dateFormat':
                error = DateFormat(data, condition.params as IdateAndTimeFormat)
                if (error.Description === ""){
                    errorLog.push(error)
                }
                console.log("dateFormat");
                break;

            case 'timeFormat':
                console.log("timeFormat");
                error = TimeFormat(data, condition.params as IdateAndTimeFormat)
                if (error.Description === ""){
                    errorLog.push(error)
                }
                break;

            case 'charLength':
                error = charLength(data, condition.params as IcharLength)
                if (error.Description === ""){
                    errorLog.push(error)
                }
                console.log("charLength");
                break;
            case 'idCodes':
                error = IdCodes(data, condition.params as IcompareCodes)
                if (error.Description === ""){
                    errorLog.push(error)
                }
                console.log("idCodes");
                break;
        }
    });
    return errorLog
}

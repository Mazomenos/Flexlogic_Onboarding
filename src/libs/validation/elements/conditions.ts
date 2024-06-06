import CompareData from "./conditions/compare"
import IdCodes from "./conditions/idCodes"
import DateFormat from "./conditions/dateFormat"
import DecimalPosition from "./conditions/decimalposition"
import charLength from "./conditions/charLength"
import TimeFormat from "./conditions/timeFormat"

import { Iconditions, IcharLength, IdecimalCondition, IcompareCodes, IcompareData, IdateAndTimeFormat } from "./conditions/InterfaceConditions"

/*
const equal: Iconditions[] = [
    {
        type: "hello",
        params:
        {
            operator: Operator.EQUAL
        }

    }
]

const equal: Iconditions[] = [
    {
        type: "hello",
        params: [
            {
                operator: "="
            }
        ]
    }
]

const equal: Iconditions[] = [
    {
        type: "hello",
        params: [
            {
                operator: "="
            }
        ]
    }
]

const equal: Iconditions[] = [
    {
        type: "hello",
        params: [
            {
                operator: "="
            }
        ]
    }
]

const equal: Iconditions[] = [
    {
        type: "hello",
        params: [
            {
                operator: "="
            }
        ]
    }
]

const equal: Iconditions[] = [
    {
        type: "hello",
        params: [
            {
                operator: "="
            }
        ]
    }
]
*/

export default function Conditions(data: string, conditions: Iconditions[], file?: Object) {
    let results: string[] = []

    //Conditions Loop
    conditions.forEach(condition => {
        let result = ""
        switch (condition.type) {
            case 'compareData':
                result = CompareData(data, condition.params as IcompareData)
                console.log("compareData");
                break;

            case 'decimalPosition':
                result = DecimalPosition(data, condition.params as IdecimalCondition)
                console.log("decimalPosition");
                break;

            case 'dateFormat':
                result = DateFormat(data, condition.params as IdateAndTimeFormat)
                console.log("dateFormat");
                break;

            case 'timeFormat':
                console.log("timeFormat");
                result = TimeFormat(data, condition.params as IdateAndTimeFormat)
                break;

            case 'charLength':
                result = charLength(data, condition.params as IcharLength)
                console.log("charLength");
                break;
            case 'idCodes':
                result = IdCodes(data, condition.params as IcompareCodes)
                console.log("idCodes");
                break;
        }
        results.push(result)
    });
    return results;
}

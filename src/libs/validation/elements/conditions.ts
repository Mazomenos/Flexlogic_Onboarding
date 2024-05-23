import CompareData from "./conditions/compare"
import idCodes from "./conditions/idCodes"
import DateFormat from "./conditions/dateFormat"
import DecimalPosition from "./conditions/decimalPosition"
import charLength from "./conditions/charLength"
import TimeFormat from "./conditions/timeFormat"

interface Iconditions {
    type: string
    params: any
}


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

export default function Conditions(data: string, conditions: Iconditions[], file: Object) {
    //Conditions Loop
    conditions.forEach(condition => {
        switch (condition.type) {
            case 'compareData':
                CompareData(data, condition.params)
                console.log("compareData");
                break;

            case 'decimalPosition':
                DecimalPosition(data, condition.params)
                console.log("decimalPosition");
                break;

            case 'dateFormat':
                DateFormat(data, condition.params)
                console.log("dateFormat");
                break;

            case 'timeFormat':
                console.log("timeFormat");
                TimeFormat(data, condition.params)
                break;

            case 'charLength':
                charLength(data, condition.params)
                console.log("charLength");
                break;
            case 'idCodes':
                idCodes(data, condition.params)
                console.log("idCodes");
                break;
        }
    });
}

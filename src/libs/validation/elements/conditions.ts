import CompareData from "./conditions/compare"
import DecimalPosition from "./conditions/decimalposition"

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
        switch(condition.type){
            case 'compareData':
                CompareData(data, condition.params)
                console.log("compareData");
                break;

            case 'decimalPosition':
                DecimalPosition(data, condition.params)
                console.log("decimalPosition");
                break;

            case 'dateFormat':
                console.log("dateFormat");
                break;

            case 'timeFormat':
                console.log("timeFormat");
                break;
            
            case 'charLength':
                console.log("charLength");
                break;
        }
    });
}

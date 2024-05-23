enum Operator {
    EQUAL = "=",
    MORE = ">",
    LESS = "<"
}

enum Source {
    STATIC = 0,
    PO = 1,
    FILE = 2
}

//Compare Interface
interface IcompareData {
    source: Source
    data: any
}

interface IcompareStatic {
    
        operator: Operator,
        data: string

}

interface IcompareFile {
  
        operator: Operator,
        segment: string,
        element: string

}

function compareStatic(data:string, params: IcompareStatic) {
    switch(params.operator){
        case Operator.EQUAL: {
            if (data !== params.data) {
                console.log("Error: valor no igual")
            } 
            console.log("equal")
            break;
        }
        case Operator.MORE: {
            if (data < params.data) {
                console.log("Error: valor menor al deseado")
            } 
            console.log("more than")
            break;
        }
        case Operator.LESS: { 
            if (data > params.data) {
                console.log("Error: valor mayor al deseado")
            } 
            console.log("less than")
            break;
        }
    }
}



export default function CompareData(data: string, params: IcompareData) {
    switch(params.source){
        case Source.STATIC:
            compareStatic(data, params.data)
            console.log("static")
            break;
        case Source.PO:
            console.log("PO")
            break;
        case Source.FILE:
            console.log("File")
            break;
    }
}
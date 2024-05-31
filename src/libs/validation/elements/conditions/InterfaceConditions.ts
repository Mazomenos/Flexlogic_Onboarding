//Condicion General

export interface Iconditions {
    type: string
    params: IcompareData | IcompareCodes | IdecimalCondition | IcharLength | IdateAndTimeFormat
}

//General Enums

//Compare

export interface IcompareData {
    source: Source
    data: IcompareFile | IcompareStatic
}

export interface IcompareStatic {
    
        operator: Operator,
        data: string

}

export interface IcompareFile {
  
        operator: Operator,
        segment: string,
        element: string

}

//Compare Enums
export enum Operator {
    EQUAL = "=",
    MORE = ">",
    LESS = "<"
}

export enum Source {
    STATIC = 0,
    PO = 1,
    FILE = 2
}


//ID Codes
export interface IcompareCodes {
    codes: string[]
}

//Decimal Position
export interface IdecimalCondition {
    decimals: string
}

//Char Length
export interface IcharLength {
    length: string
}

// Date and Time 

export interface IdateAndTimeFormat {
    format: string
}
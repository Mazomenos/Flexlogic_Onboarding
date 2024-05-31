import { z } from "zod";

//AN Type validation
function ANtype(data:string, delimiters: string[]): string {

    let regex = '^[^'
        delimiters.forEach(delimiter => {
            regex = regex + delimiter
        });

    regex = regex + ']+$'

    //console.log(regex)

    const regexSchema = z.string().regex(new RegExp(regex), 'String must not have delimiters inside them')
    const result = regexSchema.safeParse(data)
    console.log(result)
    if (result.success === false){
        return "This element most be an Alphanumeric without delimiters"
    } else {
        return ""
    }
    
}

//N0, N2, N4, N6 Type validation
function Ntype(data:string): string {

    const numSchema = z.number().int()
    const result = numSchema.safeParse(Number(data))
    console.log(result)
    if (result.success === false){
        return "This element must be an Integer Number"
    } else {
        return ""
    }
}

//R Type validation
function Rtype(data:string): string {
    const numSchema = z.number()
    const result = numSchema.safeParse(Number(data))
    console.log(result)
    if (result.success === false){
        return "This element must be a decimal number"
    } else {
        return ""
    }
}

//ID Type validation
function IDtype(data:string) {
    const schema = z.string().regex(new RegExp('^[a-zA-Z0-9]+$'))
    const result = schema.safeParse(data)
    console.log(result)
    if (result.success === false){
        return "This element must be a code that can contain numbers and letters"
    } else {
        return ""
    }
}

//DT and TM Type validation
function DTMtype(data:string) {
    const schema = z.number({message:'Must be Number'}).int().positive()
    const result = schema.safeParse(Number(data))
    console.log(result)
    if (result.success === false){
        return "This element must be a Date with only Positive Numbers"
    } else {
        return ""
    }
}

//B Type validation
function Btype(data:string) {
    
    const schema = z.string().regex(new RegExp('^[0-9a-fA-F]+$'))
    const result = schema.safeParse(data)
    console.log(result)
    if (result.success === false){
        return "This element must be a Binary or Hexadecimal value"
    } else {
        return ""
    }
}


export function Types(data:string , type:string, delimiters: string[]): string {
    let result = "";
    switch(type) {
        case 'AN':
            ANtype(data,delimiters)
            //De donde saco los delimitadores :(???
            console.log("AN")
            result = ANtype(data,delimiters)
            
            break;
        case 'N0':
        case 'N2':
        case 'N4':
        case 'N6': 
            console.log("N")
            result = Ntype(data)
            
            break;
        case 'R':
            console.log("R")
            result = Rtype(data)
            break;
        case 'ID':
            console.log("ID")
            result = IDtype(data)
            break;
        case 'DT':
        case 'TM':
            console.log("DT or TM")
            result = DTMtype(data)
            break;
        case 'B':
            console.log("B")
            result = Btype(data)
            break;
        case '':
            console.log("")
            result = ""
    }
    if (result !== ""){
        console.log(result)
        return result
    } else {
        return ""
    }

}
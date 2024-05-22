import { z } from "zod";

//AN Type validation
function ANtype(data:string, delimiters: string[]) {

    let regex = '^[^'
        delimiters.forEach(delimiter => {
            regex = regex + delimiter
        });

    regex = regex + ']+$'

    console.log(regex)

    const regexSchema = z.string().regex(new RegExp(regex), 'String must not have delimiters inside them')
    const result = regexSchema.safeParse(data)
    console.log(result)
}

//N0, N2, N4, N6 Type validation
function Ntype(data:string) {

    const numSchema = z.number().int('Must be an int number')
    const result = numSchema.safeParse(Number(data))
    console.log(result)
}

//R Type validation
function Rtype(data:string) {
    const numSchema = z.number()
    const result = numSchema.safeParse(Number(data))
    console.log(result)
}

//ID Type validation
function IDtype(data:string) {
    const schema = z.string().regex(new RegExp('^[a-zA-Z0-9]+$'))
    const result = schema.safeParse(data)
    console.log(result)
}

//DT and TM Type validation
function DTMtype(data:string) {
    const schema = z.number().int().positive()
    const result = schema.safeParse(Number(data))
    console.log(result)
}

//B Type validation
function Btype(data:string) {
    
    const schema = z.string().regex(new RegExp('^[0-9a-fA-F]+$'))
    const result = schema.safeParse(data)
    console.log(result)
}


export function Types(data:string , type:string, delimiters: string[]){
    switch(type) {
        case 'AN':
            ANtype(data,delimiters)
            //De donde saco los delimitadores :(???
            console.log("AN")
        case 'N0':
        case 'N2':
        case 'N4':
        case 'N6': 
            Ntype(data)
            console.log("N")
        case 'R':
            Rtype(data)
            console.log("R")
        case 'ID':
            IDtype(data)
            console.log("ID")
        case 'DT':
        case 'TM':
            DTMtype(data)
            console.log("DT or TM")
        case 'B':
            Btype(data)
            console.log("B")
    }
}
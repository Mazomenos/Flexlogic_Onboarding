import { z } from "zod";

//AN Type validation
function ANtype(data:string, delimiters: string[]): {Description:string, Title: string} {

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
        return {
            Description: "This Element most be an Alphanumeric Character Without the EDI Delimiters",
            Title: "Alphanumeric Type"
        }
    } else {
        return {
            Description: "",
            Title: ""
        }
    }
    
}

//N0, N2, N4, N6 Type validation
function Ntype(data:string): {Description:string, Title: string} {

    const numSchema = z.number().int()
    const result = numSchema.safeParse(Number(data))
    console.log(result)
    if (result.success === false){
        return {
            Description: "This Element must be an Integer Number",
            Title: "Number Type"
        }
    } else {
        return {
            Description: "",
            Title: ""
        }
    }
}

//R Type validation
function Rtype(data:string): {Description:string, Title: string} {
    const numSchema = z.number()
    const result = numSchema.safeParse(Number(data))
    console.log(result)
    if (result.success === false){
        return {
            Description: "This Element must be a decimal number",
            Title: "Decimal type"
        }
    } else {
        return {
            Description: "",
            Title: ""
        }
    }
}

//ID Type validation
function IDtype(data:string): {Description:string, Title: string} {
    const schema = z.string().regex(new RegExp('^[a-zA-Z0-9]+$'))
    const result = schema.safeParse(data)
    console.log(result)
    if (result.success === false){
        return {
            Description: "This element must be one of the codes in specifications that can contain numbers and letters",
            Title: "ID Type"
        }
    } else {
        return {
            Description: "",
            Title: ""
        }
    }
}

//DT and TM Type validation
function DTMtype(data:string): {Description:string, Title: string} {
    const schema = z.number({message:'Must be Number'}).int().positive()
    const result = schema.safeParse(Number(data))
    console.log(result)
    if (result.success === false){
        return {
            Description: "This element must be a Date with only Positive Numbers",
            Title: "Date Time Type"
        }
    } else {
        return {
            Description: "",
            Title: ""
        }
    }
}

//B Type validation
function Btype(data:string): {Description:string, Title: string} {
    
    const schema = z.string().regex(new RegExp('^[0-9a-fA-F]+$'))
    const result = schema.safeParse(data)
    console.log(result)
    if (result.success === false){
        return {
            Description: "This element must be a Binary or Hexadecimal value",
            Title: "Binary Type"
        }
    } else {
        return {
            Description: "",
            Title: ""
        }
    }
}


export function Types(data:string , type:string, delimiters: string[]): {Description:string, Title: string} {
    let result = {
        Description: "",
        Title: ""
    };
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
            result = {
                Description: "",
                Title: ""
            }
    }
    if (result.Description !== ""){
        console.log(result)
        return result
    } else {
        return {
            Description: "",
            Title: ""
        }
    }

}
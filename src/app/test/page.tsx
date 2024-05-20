"use client"
import { string, z } from "zod";
import { use, useState } from "react";

export default function Home() {
    const [inputString, setInputString] = useState()
    const [minString, setMinString] = useState()
    const [maxString, setMaxString] = useState()
    const [errorLog, setErrorLog] = useState();

    const max = (flag: boolean) => {
        const max = Number(maxString)
        if (flag === true && inputString.length > max) {
            flag = false
            console.log("El valor debe ser maximo " + max)
            return
        }
        console.log("Validado por max")
        return
    }

    const min = () => {
        const required = "M"
        const min = Number(minString)
        if (min > inputString.length) {
            if (inputString.length === 0) {
                if (required === "M") {
                    max(false)
                    console.log("El campo es mandatorio")
                    return
                }
                else {
                    max(false)
                    console.log("Pasa por Opt")
                    return
                }
            }
            else {
                max(false)
                console.log("El valor debe ser minimo " + min)
                return
            }
        }
        max(true)
        console.log("Validado por min")
        return
    }

    const alphanumericTest = () => {
        const regexSchema = z.string().regex(new RegExp('^[^*~:]+$'), 'String must not have delimiters inside them')
        const result = regexSchema.safeParse(inputString)
        console.log(result)
    }

    const numberTest = () => {
        const numSchema = z.number().int('Must be a int number')
        const result = numSchema.safeParse(Number(inputString))
        console.log(result)
    }

    const decimalTest = () => {
        const numSchema = z.number()
        const result = numSchema.safeParse(Number(inputString))
        console.log(result)
    }

    const idTest = () => {
        const schema = z.string().regex(new RegExp('^[a-zA-Z0-9]+$'))
        const result = schema.safeParse(inputString)
        console.log(result)
    }

    const tmTest = () => {
        const schema = z.number().int().positive()
        const result = schema.safeParse(Number(inputString))
        console.log(result)
    }

    const dtTest = () => {
        const schema = z.number().int().positive()
        const result = schema.safeParse(Number(inputString))
        console.log(result)
    }

    const bTest = () => {
        const schema = z.string().regex(new RegExp('^[0-9a-fA-F]+$'))
        const result = schema.safeParse(inputString)
        console.log(result)
    }

    const yymmddTest = () => {
        const schema = z.string().regex(new RegExp('^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$'))
        const result = schema.safeParse(inputString)
        console.log(result)
    }

    const hhmmTest = () => {
        const schema = z.string().regex(new RegExp('^(?:[01][0-9]|2[0-3])[0-5][0-9]$'))
        const result = schema.safeParse(inputString)
        console.log(result)
    }

    const ccyymmddTest = () => {
        const schema = z.string().regex(new RegExp('^[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$'))
        const result = schema.safeParse(inputString)
        console.log(result)
    }

    const alphanumeric8Test = () => {
        const schema = z.string().regex(new RegExp('^[a-zA-Z0-9]{8}$'))
        const result = schema.safeParse(inputString)
        console.log(result)
    }

    const moneyTest = () => {
        /*const schema = z.string().regex(new RegExp('^\d+\.\d{2}$'))
        const result = schema.safeParse(inputString)
        console.log(result)*/
        const decimalPosition = 2
        const parts = inputString.split('.')
        const schema = z.string().length(decimalPosition)
        const result = schema.safeParse(parts[1])
        console.log(result)
    }

    return (
        <main>
            <p>Test</p>
            <input type="text" placeholder="Value" onChange={(e) => setInputString(e.target.value)}></input>
            <div>
                <input type="text" placeholder="Min" onChange={(e) => setMinString(e.target.value)}></input>
                <input type="text" placeholder="Max" onChange={(e) => setMaxString(e.target.value)}></input>
            </div>
            <div>
                <button className="btn btn-primary" onClick={min}>Min/Max</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={alphanumericTest}>AN</button>
                <button className="btn btn-warning" onClick={numberTest}>N</button>
                <button className="btn btn-primary" onClick={decimalTest}>R</button>
                <button className="btn btn-warning" onClick={idTest}>ID</button>
                <button className="btn btn-primary" onClick={tmTest}>TM</button>
                <button className="btn btn-warning" onClick={dtTest}>DT</button>
                <button className="btn btn-primary" onClick={bTest}>B</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={yymmddTest}>YYMMDD</button>
                <button className="btn btn-primary" onClick={hhmmTest}>HHMM</button>
                <button className="btn btn-primary" onClick={ccyymmddTest}>CCYYMMDD</button>
                <button className="btn btn-primary" onClick={alphanumeric8Test}>Alph8</button>
                <button className="btn btn-primary" onClick={moneyTest}>Money</button>
            </div>
        </main>
    );
}
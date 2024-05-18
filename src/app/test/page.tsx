"use client"
import { z } from "zod";
import { useState } from "react";

export default function Home() {
    const [inputString, setInputString] = useState()
    const [errorLog, setErrorLog] = useState();


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



    return (
        <main>
            <p></p>
            <input type="text" onChange={(e) => setInputString(e.target.value)}></input>
            <button className="btn btn-primary" onClick={alphanumericTest}>AN</button>
            <button className="btn btn-warning" onClick={numberTest}>N</button>
            <button className="btn btn-primary" onClick={decimalTest}>R</button>
            <button className="btn btn-warning" onClick={idTest}>ID</button>
            <button className="btn btn-primary" onClick={tmTest}>TM</button>
            <button className="btn btn-warning" onClick={dtTest}>DT</button>
            <button className="btn btn-primary" onClick={bTest}>B</button>
        </main>
    );
}
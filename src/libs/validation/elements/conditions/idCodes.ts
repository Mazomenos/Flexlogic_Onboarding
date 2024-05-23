interface IcompareCodes {
    codes: string[]
}

export default function idCodes(data:string, params: IcompareCodes) {
    let count = 0
    while(count < params.codes.length){
        if (params.codes[count] === data){
            console.log("Codigo Valido")
            return
        }
        count++
    }

    console.log("Error: No es codigo valido")

}
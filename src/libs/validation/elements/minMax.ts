

export function Min(data: string, min: number, req: string){

    //Dato menor que el minimo?
    if (min > data.length) {
        //Dato Vacio?
        if (data.length === 0){
            //Dato Mandatorio?
            if (req === "M"){
                console.log("Error, Elemento Mandatorio Vacio")
                return false
            }
            else {
                console.log("Opcional")
                return true
            }
        }
        else {
            console.log("Valor debe ser minimo " + min)
            return false
        }
    }
    console.log("Validado por Min")
    return true

}

export function Max(data: string, max: number){
    //
    if (data.length > max){
        console.log("Valor debe ser maximo " + max)
        return false
    }
    //
    console.log("Validado por max")
    return true
    
    console.log("max");
}
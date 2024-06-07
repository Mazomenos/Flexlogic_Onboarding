

export function Min(data: string, min: number, req: string): string{

    //Dato menor que el minimo?
    if (min > data.length) {
        //Dato Vacio?
        if (data.length === 0){
            //Dato Mandatorio?
            if (req === "M"){
                console.log("Error, Elemento Mandatorio Vacio")
                return "Error, Elemento Mandatorio Vacio"
            }
            else {
                console.log("Opcional")
                return ""
            }
        }
        else {
            console.log("Valor debe ser minimo " + min)
            return "Valor debe ser minimo " + min
        }
    }
    console.log("Validado por Min")
    return ""

}

export function Max(data: string, max: number): string{
    //
    if (data.length > max){
        console.log("Valor debe ser maximo " + max)
        return "Valor debe ser maximo " + max
    }
    //
    console.log("Validado por max")
    return ""
    
}
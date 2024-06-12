

export function Min(data: string, min: number, req: string): {Description:string, Title: string}{

    //Dato menor que el minimo?
    if (min > data.length) {
        //Dato Vacio?
        if (data.length === 0){
            //Dato Mandatorio?
            if (req === "M"){
                console.log("Error, Elemento Mandatorio Vacio")
                return {
                    Description: `The Element in this position is Mandatory and should be present`,
                    Title: "Mandatory Element is Empty"
                }
            }
            else {
                console.log("Opcional")
                return {
                    Description: "",
                    Title: ""
                }
            }
        }
        else {
            console.log("Valor debe ser minimo " + min)
            return {
                Description: `This Element should be at least ${min} Characters`,
                Title: "Element Min"
            }
        }
    }
    console.log("Validado por Min")
    return {
        Description: "",
        Title: ""
    }

}

export function Max(data: string, max: number): {Description:string, Title: string}{
    //
    if (data.length > max){
        console.log("Valor debe ser maximo " + max)
        return {
            Description: `This Element should be at Maximum ${max} Characters`,
            Title: "Element Max"
        }
    }
    //
    console.log("Validado por max")
    return {
        Description: "",
        Title: ""
    }
    
}
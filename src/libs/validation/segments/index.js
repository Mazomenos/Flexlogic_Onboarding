"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkRep(repCounter, posClient, sysFileMax, segClientName, isFirst) {
    if (repCounter > +sysFileMax && sysFileMax !== ">1") {
        console.log("No paso rep");
        // Verifica si el loop esta en el recorrido principal
        if (isFirst === true) {
            return { status: "Failed", Position: posClient, Description: "Max repetition limit reached for Segment:" + segClientName };
        }
        else {
            // Verifica si el loop tiene requerimiento obligatorio
            return { status: "ErrorRep", posClient: 0 };
        }
    }
    console.log("chequeo de repeticiones");
    return { status: "Continue" };
}
function checkRequirement() {
    console.log("chequeo de requerimiento");
}
function ValStructure(currSystemFile, ClientFile, varControlClient, reqLoop, isFirst) {
    var isValidated = false;
    var repCounter = 0;
    var varControlSys = 0;
    var segmentsValidated = 0;
    var result;
    console.log("Largo del sistema: ", currSystemFile.length);
    console.log("Largo del cliente: ", ClientFile.length);
    console.log("Cl:", ClientFile[varControlClient].name, " Pos: ", varControlClient, " Sys:", currSystemFile[varControlSys].Segment, " Pos: ", varControlSys);
    // Mientras haya segmentos en el sistema o loop
    while (varControlSys < currSystemFile.length) {
        console.log("inicia loop-----------------------------------------");
        // Cuando se acabe los segmentos de cliente
        if (varControlClient >= ClientFile.length) {
            console.log("se termino el cliente");
            // Si antes hubo un segmento igual reinicia contador y avanza en sistema
            if (repCounter >= 1) {
                repCounter = 0;
                varControlSys++;
            }
            else {
                // Debe de hacer recorrido de los segmentos que quedan
                // Falta agregar logica de recorrido en loops
                if (currSystemFile[varControlSys].Requirement === "M") {
                    // Agregar recorrido dentro de loop
                    return { status: "Failed" };
                }
                // Avanza si segmento de sistema no es obligatorio
                varControlSys++;
            }
        }
        else {
            console.log("Cl:", ClientFile[varControlClient].name, " Pos: ", varControlClient, " Sys:", currSystemFile[varControlSys].Segment, " Pos: ", varControlSys);
            // Ambos segmentos son iguales, avanza cliente y repetidor
            if (ClientFile[varControlClient].name === currSystemFile[varControlSys].Segment &&
                repCounter <= +currSystemFile[varControlSys].Max) {
                repCounter++;
                varControlClient++;
                isValidated = true;
                segmentsValidated++;
            }
            else {
                repCounter = 0;
                // Manejo de loops
                if (currSystemFile[varControlSys].Segment === "LOOP") {
                    var varControlLoop = 0;
                    var diff = 1;
                    var result_1 = void 0;
                    console.log(currSystemFile[varControlSys].Max);
                    while (varControlLoop < +currSystemFile[varControlSys].Max && diff > 0) {
                        console.log("loop");
                        result_1 = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
                        console.log("result: ", result_1);
                        console.log("Loop terminado");
                        console.log("varControoooooooooooooooool:", varControlLoop);
                        varControlLoop++;
                        if (result_1.status === "Success") {
                            varControlClient = result_1.posClient;
                            console.log("hola2");
                            if (varControlClient >= ClientFile.length) {
                                console.log("breakaaa");
                                varControlSys++;
                                break;
                            }
                            varControlLoop++;
                        }
                        else if (result_1.status === "Failed") {
                            varControlSys++;
                            return { status: "Failed" };
                        }
                        else if (result_1.status === "ErrorNotEqual") {
                            varControlClient = result_1.posClient;
                            varControlSys++;
                            diff = result_1.posClient - varControlClient;
                            console.log("diff:", diff);
                            break;
                            // Checar condiciones cuando hay un error de repeticiones en un loop
                        }
                        else if (result_1.status === "ErrorRep") {
                            console.log("cl: ", varControlClient, " sys: ", varControlSys);
                            // Ocurre cuando se hay un segmento repetido maximo
                            console.log("ErrorLoop de verdad");
                            // Si el ultimo segmento del loop es el que se repite 
                            if (result_1.lastItem && currSystemFile[varControlSys + 1].Segment === ClientFile[result_1.posClient - 1].name) {
                                varControlClient = result_1.posClient - 1;
                                varControlSys++;
                                break;
                            }
                            else {
                                return { status: "Failed" };
                            }
                        }
                        else if (result_1.status === "ErrorEndSystem") {
                            console.log("verdadero ErrorEndSystem");
                            console.log("cl: ", varControlClient, " sys: ", varControlSys);
                            varControlClient = result_1.posClient;
                            console.log("cl: ", varControlClient, " sys: ", varControlSys);
                        }
                    }
                    varControlSys++;
                    // Despues de que dos segmentos se validen y baje el del sistema, controla segmentos repetidos al solo bajar cuando ya sean diferentes
                }
                else if (isValidated === true) {
                    console.log("validated");
                    varControlSys++;
                    isValidated = false;
                }
                else {
                    console.log("Los segmentos son diferentes");
                    // Dos segmentos son diferentes y el del sistema es obligatorio
                    if (currSystemFile[varControlSys].Requirement === "M") {
                        // No estamos en un loop
                        if (isFirst) {
                            return { status: "Failed" };
                            // Estamos en un loop obligatorio
                        }
                        else if (reqLoop === "M") {
                            return { status: "Failed", Position: varControlClient };
                        }
                        // Estamos en un loop no obligatorio
                        return { status: "ErrorNotEqual", posClient: varControlClient, segValidated: segmentsValidated };
                        // El segmento del sistema no era obligatorio
                    }
                    else {
                        varControlSys++;
                    }
                }
            }
            // Chequeo de la posicion en el sistema
            if (varControlSys >= currSystemFile.length) {
                break;
            }
            // Chequeo de repeticiones
            result = checkRep(repCounter, varControlClient - 1, currSystemFile[varControlSys].Max, ClientFile[varControlClient - 1].name, isFirst);
            // El chequeo dio error donde el maximo estaba fuera de cualquier loop
            if (result.status === "Failed") {
                return { status: "Failed" };
                // Dio error pero estabamos dentro de un loop
            }
            else if (result.status === "ErrorRep") {
                // El segmento repetido es el ultimo
                console.log("ErrorRep");
                if (varControlSys === currSystemFile.length - 1) {
                    console.log("Ultimo segmento del loop: ", currSystemFile[varControlSys]);
                    return { status: result.status, posClient: varControlClient, lastItem: true };
                }
                return { status: "Failed" };
            }
        }
    }
    // Se acabo los segmentos del sistema o loop
    // Aun quedaban segmentos en el documento de cliente
    if (varControlClient < ClientFile.length) {
        // Fuera de loop, significa que hay mas segmentos en cliente que los que deberia
        if (isFirst) {
            return { status: "Failed", Desc: "Failed more segments present in your file" };
        }
        // Dentro de loop por lo que aun podria haber segmentos en sistema
        return { status: "ErrorEndSystem", posClient: varControlClient, firstSeg: currSystemFile[0] };
    }
    console.log("Final, cliente: ", varControlClient, " sistema: ", varControlSys);
    if (isFirst) {
        return { status: "Success" };
    }
    return { status: "Success", posClient: varControlClient };
}
exports.default = ValStructure;

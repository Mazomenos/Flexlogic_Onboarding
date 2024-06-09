"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkRep(repCounter, posClient, sysFileMax, segClientName, isFirst) {
    if (repCounter > +sysFileMax && sysFileMax !== ">1") {
        console.log("No paso rep");
        // Verifica si el loop esta en el recorrido principal
        if (isFirst === true) {
            console.log("error bien");
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
                console.log("iguales");
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
                    var result_1 = void 0, result2 = void 0;
                    var lastSegment = false;
                    console.log(currSystemFile[varControlSys].Max);
                    while (varControlLoop < +currSystemFile[varControlSys].Max && diff > 0) {
                        console.log("Loop");
                        result_1 = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
                        varControlLoop++;
                        console.log("ResultPrincipio-------------------------------");
                        console.log(result_1);
                        console.log("cl: ", varControlClient, " sys: ", varControlSys);
                        console.log("largo del sistema actual: ", currSystemFile.length);
                        // Checa si hay segmentos siguientes, por ejemplo si un loop dentro de otro loop es el ultimo segmento del mismo
                        if (varControlSys >= currSystemFile.length - 1) {
                            console.log("ultima posicion del sistema actual");
                            lastSegment = true;
                        }
                        // Terminar de definir bien esta seccion
                        //Checa si hay otro loop enfrente del loop que se esta checando y que ambos loops empiecen con el mismo segmento
                        if (!lastSegment && currSystemFile[varControlSys + 1].Segment === "LOOP" &&
                            currSystemFile[varControlSys].Segments[0].Segment ===
                                currSystemFile[varControlSys + 1].Segments[0].Segment) {
                            console.log("Siguiente segmento es loop");
                            result2 = ValStructure(currSystemFile[varControlSys + 1].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
                            console.log("Result-------------------------------");
                            console.log(result_1);
                            console.log("Result-------------------------------");
                            console.log(result2);
                        }
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
                            //varControlSys++;
                            diff = result_1.posClient - varControlClient;
                            console.log("diff:", diff);
                            break;
                            // Checar condiciones cuando hay un error de repeticiones en un loop
                        }
                        else if (result_1.status === "ErrorRep") {
                            console.log("cl: ", varControlClient, " sys: ", varControlSys);
                            console.log("sys:", currSystemFile[varControlSys].Segment);
                            console.log("cl:", ClientFile[result_1.posClient].name);
                            // Ocurre cuando se hay un segmento repetido maximo
                            console.log("ErrorRep de verdad");
                            // Si el ultimo segmento del loop es el que se repite 
                            if (result_1.lastItem) {
                                // ADAPTAR POR SI HAY ALGUN SEGMENTO QUE SEA IGUAL AL FINAL DE
                                // Checa si la siguiente posicion en el sistema es igual al ultimo segmento con el error
                                if (!lastSegment && currSystemFile[varControlSys + 1].Segment === ClientFile[result_1.posClient - 1].name) {
                                    varControlClient = result_1.posClient - 1;
                                    break;
                                    // el primer segmento de sistema es diferente al siguiente segmento de cliente
                                }
                                else if (currSystemFile[varControlSys].Segments[0].Segment !== ClientFile[result_1.posClient - 1].name) {
                                    console.log("el primer segmento de sistema es diferente al siguiente segmento de cliente");
                                    varControlClient = result_1.posClient - 1;
                                    break;
                                }
                                varControlClient = result_1.posClient - 1;
                                console.log(varControlLoop);
                                console.log("Despues de errorLoop, continua el ciclo");
                            }
                            else {
                                return { status: "Failed" };
                            }
                            // Checar cuando se termina un loop con aun unos cuantos segmentos de cliente
                        }
                        else if (result_1.status === "ErrorEndSystem") {
                            console.log("ErrorEndSystem");
                            console.log("Cl:", ClientFile[varControlClient].name, " Pos: ", varControlClient, " Sys:", currSystemFile[varControlSys].Segment, " Pos: ", varControlSys);
                            // Probar mas la seccion de loop ----------------------------------------
                            // Si el siguiente segmento del cliente es igual a la primer posicion del loop, que continue el loop
                            if (currSystemFile[varControlSys].Segments[0].Segment === ClientFile[result_1.posClient].name) {
                                console.log(varControlClient);
                                console.log(result_1.posClient);
                                console.log("Continua el loop despues de errorendsystem");
                                varControlClient = result_1.posClient;
                                continue;
                                // Si el segmento de cliente anterior es igual al siguiente segmento del sistema, se regresa uno para verificar ese
                            }
                            else if (!lastSegment && ClientFile[varControlClient - 1].name === currSystemFile[varControlSys + 1].Segment) {
                                varControlClient--;
                                repCounter = 0;
                                break;
                                // El detenemos el ciclo pues el siguiente del sistema es diferente al principio del loop
                            }
                            else if (currSystemFile[varControlSys].Segments[0].Segment !== ClientFile[varControlClient].name) {
                                console.log("hola");
                                break;
                                // Cuando el siguiente segmento es un loop 
                            }
                            else if (!lastSegment && currSystemFile[varControlSys + 1].Segment === "LOOP") {
                                console.log("siguiente segmento es loop");
                                varControlClient = result_1.posClient;
                                break;
                            }
                            varControlClient = result_1.posClient;
                            console.log(result_1);
                            break;
                            console.log("nada");
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
            console.log(isFirst);
            console.log("Largo del sistema: ", currSystemFile.length);
            // Chequeo de repeticiones
            result = checkRep(repCounter, varControlClient - 1, currSystemFile[varControlSys].Max, ClientFile[varControlClient - 1].name, isFirst);
            // El chequeo dio error donde el maximo estaba fuera de cualquier loop
            if (result.status === "Failed") {
                return { status: "Failed" };
                // Dio error pero estabamos dentro de un loop
            }
            else if (result.status === "ErrorRep") {
                console.log("debugeo en errorrep ----------------");
                console.log(varControlSys);
                console.log(currSystemFile.length - 1);
                // El segmento repetido es el ultimo
                if (varControlSys === currSystemFile.length - 1) {
                    console.log("Ultimo segmento del loop: ", currSystemFile[varControlSys]);
                    return { status: result.status, posClient: varControlClient, lastItem: true };
                }
                console.log("Aquii");
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
        console.log("lo que busco");
        console.log("cl: ", varControlClient, " sys: ", varControlSys);
        // Checa si viene de un loop o no
        if (currSystemFile[varControlSys - 1].Segment === "LOOP") {
            console.log("era loop");
            return { status: "ErrorEndSystem", posClient: varControlClient, firstSeg: currSystemFile[0] };
        }
        else {
            return { status: "ErrorEndSystem", posClient: varControlClient, firstSeg: currSystemFile[0].Segment, lastSegSys: currSystemFile[varControlSys - 1].Segment };
        }
    }
    console.log("Final, cliente: ", varControlClient, " sistema: ", varControlSys);
    if (isFirst) {
        return { status: "Success" };
    }
    return { status: "Success", posClient: varControlClient };
}
exports.default = ValStructure;

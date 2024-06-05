"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkRep(repCounter, posClient, sysFileMax, segClientName, reqLoop, isFirst) {
    if (repCounter > +sysFileMax && sysFileMax !== ">1") {
        console.log("No paso rep");
        // Verifica si el loop esta en el recorrido principal
        if (isFirst === true) {
            return { Status: "Failed", Position: posClient, Description: "Max repetition limit reached for Segment:" + segClientName };
        }
        else {
            // Verifica si el loop tiene requerimiento obligatorio
            if (reqLoop === "M") {
                return { Status: "Failed", Position: posClient, Description: "Max repetition limit reached for Segment:" + segClientName };
            }
            else {
                return { Status: "Continue" };
            }
        }
    }
    console.log("chequeo de repeticiones");
    return { Status: "Continue" };
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
    while (varControlSys < currSystemFile.length) {
        console.log("inicia loop");
        if (varControlClient >= ClientFile.length) {
            console.log("se termino el cliente");
            console.log("system: ", currSystemFile[varControlSys].Segment);
            console.log("repCounter: ", repCounter);
            if (repCounter >= 1) {
                repCounter = 0;
                varControlSys++;
            }
            else {
                if (currSystemFile[varControlSys].Requirement === "M") {
                    return { Status: "Failed" };
                }
                varControlSys++;
            }
        }
        else {
            console.log("Cl:", ClientFile[varControlClient].name, " Pos: ", varControlClient, " Sys:", currSystemFile[varControlSys].Segment, " Pos: ", varControlSys);
            if (ClientFile[varControlClient].name === currSystemFile[varControlSys].Segment &&
                repCounter <= +currSystemFile[varControlSys].Max) {
                repCounter++;
                varControlClient++;
                isValidated = true;
                segmentsValidated++;
            }
            else {
                console.log("holaaa");
                repCounter = 0;
                // if (currSystemFile[varControlSys].Segment === "LOOP") {
                //   let varControlLoop = 0;
                //   let diff = 1;
                //   let result, result2;
                //   while (varControlLoop <= currSystemFile[varControlSys].Max && diff > 0) {
                //       console.log("Max: ",currSystemFile[varControlSys].Max)
                //       console.log("control loop:",varControlLoop)
                //       repCounter = 0;
                //       result = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
                //       if (currSystemFile[varControlSys + 1].Segment === "LOOP" && currSystemFile[varControlSys].Segments[0].Segment === currSystemFile[varControlSys + 1].Segments[0].Segment) {
                //         console.log("loop doble")
                //         result2 = ValStructure(currSystemFile[varControlSys + 1].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
                //         console.log("termino loop doble")
                //         if (result.segValidated < result2.segValidated) {
                //           diff = result2.value;
                //           diff = diff - varControlClient;
                //           varControlClient = diff + varControlClient;
                //           varControlSys++;
                //           console.log("Gano segundo")
                //         } else if (result.segValidated > result2.segValidated) {
                //           diff = result.value;
                //           diff = diff - varControlClient;
                //           varControlClient = diff + varControlClient;
                //           console.log("Gano primero")
                //         } else {
                //           diff = result.value;
                //           diff = diff - varControlClient;
                //           console.log("empate")
                //           varControlClient++;
                //         }
                //       } else if ( result.Status === "Failed") {
                //         console.log("failed status")
                //         if (result.Type === 1) {
                //           console.log("hola")
                //           //varControlClient--;
                //           //varControlClient++;
                //           break;
                //         } else {
                //           if (varControlLoop > 0) {
                //             console.log("termino loop")
                //             break;
                //           }
                //           console.log("kk")
                //           return { Status: result.Status, Position: result.Position, Description: result.Description }
                //         }
                //       } else if (result.Status === "ErrorLoop") {
                //         console.log("errorloop");
                //         varControlLoop = 0;
                //         break;
                //       } else {
                //         varControlClient++;
                //         //console.log("validated: ", result.segValidated)
                //       }
                //       //console.log("validated: ", result.segValidated)
                //       console.log("final")
                //       console.log(diff)
                //       varControlLoop++;
                //       console.log("Max final: ",currSystemFile[varControlSys].Max)
                //       console.log("control loop2:", varControlLoop)
                //   }
                //   console.log("Se termino el loop");
                //   console.log("varcontrolloop: ", varControlLoop, " | max: ", currSystemFile[varControlSys].Max)
                //   if (varControlLoop  > +currSystemFile[varControlSys].Max  && currSystemFile[varControlSys].Requirement === "M") {
                //     return { Status: "Failed", Type: 1, Position: varControlClient, Description: `Max repetition limit reached for Segment: ${ClientFile[varControlClient].name}`};
                //   }
                //   //varControlClient++;
                //   varControlSys++;
                //   console.log("varcontrolcl: ", varControlClient)
                // } else 
                if (isValidated === true) {
                    console.log("validated");
                    varControlSys++;
                    isValidated = false;
                }
                else {
                    console.log("hola");
                    if (currSystemFile[varControlSys].Requirement === "M") {
                        if (reqLoop === "M") {
                            return { Status: "Failed", Position: varControlClient, Description: "Error Segment ".concat(currSystemFile[varControlSys].Segment, " is Mandatory and is not present in your current file!") };
                        }
                        return { Status: "ErrorLoop", value: varControlClient, segValidated: segmentsValidated };
                    }
                    else {
                        varControlSys++;
                    }
                }
            }
            if (varControlSys >= currSystemFile.length) {
                break;
            }
            result = checkRep(repCounter, varControlClient - 1, currSystemFile[varControlSys].Max, ClientFile[varControlClient - 1].name, reqLoop, isFirst);
            if (result.Status === "Failed") {
                return result.Description;
            }
        }
    }
    // if (varControlSys < currSystemFile.length - 1 || varControlClient < ClientFile.length) {
    //   switch(currSystemFile[varControlSys + 1].Requirement) {
    //     case "M": {
    //       return { Status: "Failed", Position: varControlClient, Description: `The last Segment ${currSystemFile[varControlSys + 1].Segment} is Mandatory and is not present in your current file!`};
    //     }
    //     case "OP": {
    //       return { Status: "Success" };
    //     }
    //   }
    //   return { Status: "Failed", Position: varControlClient, Description: `There are more segments present in your file than there should be, starting from segment: ${ClientFile[varControlClient - 1].name}` };
    // } else {
    //   if (repCounter > currSystemFile[varControlSys].Max) {
    //     console.log("rep final")
    //     return { Status: "Failed", Position: varControlClient - 1, Description: `Max repetition limit reached for Segment: ${ClientFile[varControlClient - 1].name}`};
    //   }
    //   return { Status: "Success" };
    // }
    if (varControlClient < ClientFile.length) {
        return "Failed more segments present in your file";
    }
    console.log("Final, cliente: ", varControlClient, " sistema: ", varControlSys);
    return { status: "Success" };
}
exports.default = ValStructure;

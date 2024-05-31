"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ValStructure(currSystemFile, ClientFile, varControlClient, reqLoop, isFirst) {
    var isValidated = false;
    var repCounter = 0;
    var varControlSys = 0;
    var segmentsValidated = 0;
    while (varControlSys < currSystemFile.length + 1) {
        if (varControlSys >= currSystemFile.length) {
            if (isFirst === true) {
                break;
            }
            return { value: varControlClient, segValidated: segmentsValidated };
        }
        else {
            if (varControlClient >= ClientFile.length) {
                break;
            }
            console.log("Sys:", currSystemFile[varControlSys].Segment, " Pos:", varControlSys, " | Cliente:", ClientFile[varControlClient].name, " Pos:", varControlClient);
        }
        if ((ClientFile[varControlClient].name ===
            currSystemFile[varControlSys].Segment &&
            repCounter <= +currSystemFile[varControlSys].Max) ||
            (ClientFile[varControlClient].name ===
                currSystemFile[varControlSys].Segment &&
                currSystemFile[varControlSys].Max === ">1")) {
            repCounter++;
            varControlClient++;
            isValidated = true;
            segmentsValidated++;
        }
        else {
            if (repCounter > currSystemFile[varControlSys].Max && isFirst === true) {
                console.log("faileerr");
                return { Status: "Failed", Type: 1, value: varControlClient, Position: varControlClient - 1, Description: "Max repetition limit reached for Segment: ".concat(ClientFile[varControlClient - 1].name) };
            }
            repCounter = 0;
            if (currSystemFile[varControlSys].Segment === "LOOP") {
                var varControlLoop = 0;
                var diff = 1;
                var result = void 0, result2 = void 0;
                while (varControlLoop <= currSystemFile[varControlSys].Max && diff > 0) {
                    console.log("varClienteee: ", varControlClient);
                    console.log("varSysteeem:", varControlSys);
                    console.log("Max: ", currSystemFile[varControlSys].Max);
                    console.log("control loop:", varControlLoop);
                    repCounter = 0;
                    result = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
                    if (currSystemFile[varControlSys + 1].Segment === "LOOP" && currSystemFile[varControlSys].Segments[0].Segment === currSystemFile[varControlSys + 1].Segments[0].Segment) {
                        console.log("loop doble");
                        result2 = ValStructure(currSystemFile[varControlSys + 1].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
                        console.log("termino loop doble");
                        if (result.segValidated < result2.segValidated) {
                            diff = result2.value;
                            diff = diff - varControlClient;
                            varControlClient = diff + varControlClient;
                            varControlSys++;
                            console.log("Gano segundo");
                        }
                        else if (result.segValidated > result2.segValidated) {
                            diff = result.value;
                            diff = diff - varControlClient;
                            varControlClient = diff + varControlClient;
                            console.log("Gano primero");
                        }
                        else {
                            diff = result.value;
                            diff = diff - varControlClient;
                            console.log("empate");
                            varControlClient++;
                            //varControlSys++;
                        }
                    }
                    else if (result.Status === "Failed") {
                        console.log("failed status");
                        if (result.Type === 1) {
                            console.log("hola");
                            //varControlClient--;
                            varControlClient++;
                            break;
                        }
                        else {
                            if (varControlLoop > 0) {
                                console.log("termino loop");
                                break;
                            }
                            console.log("kk");
                            return { Status: result.Status, Position: result.Position, Description: result.Description };
                        }
                    }
                    else if (result.Status === "ErrorLoop") {
                        console.log("errorloop");
                        varControlLoop = 0;
                        break;
                    }
                    else {
                        varControlClient++;
                    }
                    console.log("final");
                    console.log(diff);
                    varControlLoop++;
                    console.log("Max2: ", currSystemFile[varControlSys].Max);
                    console.log("control loop2:", varControlLoop);
                }
                console.log("Se termino el loop");
                console.log("varcontrolloop: ", varControlLoop, " | max: ", currSystemFile[varControlSys].Max);
                if (varControlLoop > +currSystemFile[varControlSys].Max) {
                    return { Status: "Failed", Type: 1, Position: varControlClient - 1, Description: "Max repetition limit reached for Segment: ".concat(ClientFile[varControlClient - 1].name) };
                }
                varControlSys++;
                console.log("varcontrolcl: ", varControlClient);
            }
            else if (isValidated === true) {
                varControlSys++;
                isValidated = false;
            }
            else {
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
    }
    if (varControlSys < currSystemFile.length - 1 || varControlClient < ClientFile.length) {
        switch (currSystemFile[varControlSys + 1].Requirement) {
            case "M": {
                return { Status: "Failed", Position: varControlClient, Description: "The last Segment ".concat(currSystemFile[varControlSys + 1].Segment, " is Mandatory and is not present in your current file!") };
            }
            case "OP": {
                return { Status: "Success" };
            }
        }
        return { Status: "Failed", Position: varControlClient, Description: "There are more segments present in your file than there should be, starting from segment: ".concat(ClientFile[varControlClient - 1].name) };
    }
    else {
        if (repCounter > currSystemFile[varControlSys].Max) {
            console.log("rep final");
            return { Status: "Failed", Position: varControlClient - 1, Description: "Max repetition limit reached for Segment: ".concat(ClientFile[varControlClient - 1].name) };
        }
        return { Status: "Success" };
    }
}
exports.default = ValStructure;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ValStructure(currSystemFile, ClientFile, varControlClient, reqLoop, isFirst) {
    // console.log(currSystemFile);
    // console.log(ClientFile);
    var isValidated = false;
    var repCounter = 0;
    var varControlSys = 0;
    while (varControlSys < currSystemFile.length + 1) {
        if (varControlSys >= currSystemFile.length) {
            if (isFirst === true) {
                break;
            }
            return { status: "ErrorLoop", value: varControlClient };
        }
        else {
            if (varControlClient >= ClientFile.length) {
                break;
            }
            //console.log("Sys:", currSystemFile[varControlSys].Segment, " Pos:", varControlSys, " | Cliente:", ClientFile[varControlClient].name, " Pos:", varControlClient);
        }
        if ((ClientFile[varControlClient].name ===
            currSystemFile[varControlSys].Segment &&
            repCounter <= currSystemFile[varControlSys].Max) ||
            (ClientFile[varControlClient].name ===
                currSystemFile[varControlSys].Segment &&
                currSystemFile[varControlSys].Max === ">1")) {
            repCounter++;
            varControlClient++;
            isValidated = true;
        }
        else {
            if (repCounter > currSystemFile[varControlSys].Max) {
                return { status: "Failed" };
            }
            repCounter = 0;
            if (currSystemFile[varControlSys].Segment === "LOOP") {
                var varControlLoop = 0;
                var diff = 1;
                var result = void 0;
                while (varControlLoop <= currSystemFile[varControlSys].Max && diff > 0) {
                    result = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
                    if (result.status === "Failed") {
                        if (varControlLoop > 0) {
                            break;
                        }
                        return { status: "Failed" };
                    }
                    diff = result.value;
                    diff = diff - varControlClient;
                    varControlClient = diff + varControlClient;
                    varControlLoop++;
                }
                varControlSys++;
            }
            else if (isValidated === true) {
                varControlSys++;
                isValidated = false;
            }
            else {
                if (currSystemFile[varControlSys].Requirement === "M") {
                    if (reqLoop === "M") {
                        return { status: "Failed", comment: "Error" };
                    }
                    return { status: "error", value: varControlClient };
                }
                else {
                    varControlSys++;
                }
            }
        }
    }
    // console.log("Cliente: ", varControlClient, " Largo: ", ClientFile.length);
    // console.log("Sistema: ", varControlSys, " Largo: ", currSystemFile.length - 1);
    if (varControlSys < currSystemFile.length - 1 || varControlClient < ClientFile.length) {
        return { status: "Failed" };
    }
    else {
        return { status: "Success" };
    }
}
exports.default = ValStructure;
//console.log(ValStructure(SystemFile, ClientFile, 0, "M", true).status);

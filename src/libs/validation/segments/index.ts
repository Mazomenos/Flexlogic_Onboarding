
export default function ValStructure(currSystemFile: Array<any>, ClientFile: Array<any>, varControlClient: number, reqLoop: String, isFirst: Boolean): any {
  let isValidated = false;
  let repCounter = 0;
  let varControlSys = 0;

  while (varControlSys < currSystemFile.length + 1) {
    if ( varControlSys >= currSystemFile.length ) {
      if (isFirst === true) {
        break;
      }
      return { Status: "EndLoop", value: varControlClient };
    } else {
      if (varControlClient >= ClientFile.length) {
        break;
      }
      //console.log("Sys:", currSystemFile[varControlSys].Segment, " Pos:", varControlSys, " | Cliente:", ClientFile[varControlClient].name, " Pos:", varControlClient);
    }

    if (
      (ClientFile[varControlClient].name ===
        currSystemFile[varControlSys].Segment &&
        repCounter <= currSystemFile[varControlSys].Max) ||
      (ClientFile[varControlClient].name ===
        currSystemFile[varControlSys].Segment &&
        currSystemFile[varControlSys].Max === ">1")
    ) {
      repCounter++;
      varControlClient++;
      isValidated = true;
    } else {
      if (repCounter > currSystemFile[varControlSys].Max) {
        return { Status: "Failed", Position: varControlClient - 1, Description: `Max repetition limit reached for Segment: ${ClientFile[varControlClient - 1].name}`};
      }
      repCounter = 0;
      if (currSystemFile[varControlSys].Segment === "LOOP") {
        let varControlLoop = 0;
        let diff = 1;
        let result;
        while (varControlLoop <= currSystemFile[varControlSys].Max && diff > 0) {
            result = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
            
            diff = result.value;
            diff = diff - varControlClient;

            switch (result.Status) {
              case ("Failed"): {
                if (varControlLoop > 0) {
                  break;
                }
                return { Status: result.status, Position: result.Position, Description: result.Description }
              }
              case ("EndLoop"): {
                varControlClient = diff + varControlClient;
                varControlLoop++;
              }
              case ("ErrorLoop"): {
                break;
              }
            }
        }
        varControlSys++;
      } else if (isValidated === true) {
        varControlSys++;
        isValidated = false;
      } else {
        if (currSystemFile[varControlSys].Requirement === "M") {
            if (reqLoop === "M") {
                return { Status: "Failed", Position: varControlClient, Description: `Segment ${currSystemFile[varControlSys].Segment} is Mandatory and is not present in your current file!`}
            }
            return { Status: "ErrorLoop",value: varControlClient };
        } else {
          varControlSys++;
        }
      }
    }
  }

  if (varControlSys < currSystemFile.length - 1 || varControlClient < ClientFile.length) {
    switch(currSystemFile[varControlSys + 1].Requirement) {
      case "M": {
        return { Status: "Failed", Position: varControlClient, Description: `The last Segment ${currSystemFile[varControlSys + 1].Segment} is Mandatory and is not present in your current file!`};
      }
      case "OP": {
        return { Status: "Success" };
      }
    }
    return { Status: "Failed", Position: varControlClient, Description: `There are more segments present in your file than there should be, starting from segment: ${ClientFile[varControlClient - 1].name}` };
  } else {
    if (repCounter > currSystemFile[varControlSys].Max) {
      return { Status: "Failed", Position: varControlClient - 1, Description: `Max repetition limit reached for Segment: ${ClientFile[varControlClient - 1].name}`};
    }
    return { Status: "Success" };
  }
}

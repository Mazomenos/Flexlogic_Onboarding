
function checkRep(repCounter: number, posClient: number, sysFileMax: string, segClientName: string, reqLoop: string, isFirst: Boolean) {
  if (repCounter > +sysFileMax && sysFileMax !== ">1") {
    console.log("No paso rep")
    // Verifica si el loop esta en el recorrido principal
    if (isFirst === true) {
      return { Status: "Failed", Position: posClient, Description: "Max repetition limit reached for Segment:" + segClientName};
    } else {
      // Verifica si el loop tiene requerimiento obligatorio
      if (reqLoop === "M") {
        return { Status: "Failed", Position: posClient, Description: "Max repetition limit reached for Segment:" + segClientName};
      } else {
        return { Status: "Continue"}
      }
    }
  }
  console.log("chequeo de repeticiones")
  return { Status: "Continue"}
}


function checkRequirement() {
  console.log("chequeo de requerimiento")
}



export default function ValStructure(currSystemFile: Array<any>, ClientFile: Array<any>, varControlClient: number, reqLoop: string, isFirst: Boolean): any {
  let isValidated = false;
  let repCounter = 0;
  let varControlSys = 0;
  let segmentsValidated = 0;
  let result;
  console.log("Largo del sistema: ", currSystemFile.length)
  console.log("Largo del cliente: ", ClientFile.length)
  console.log("Cl:", ClientFile[varControlClient].name, " Pos: ", varControlClient, " Sys:", currSystemFile[varControlSys].Segment, " Pos: ", varControlSys);

  while (varControlSys < currSystemFile.length) {
    console.log("inicia loop")

    if (varControlClient >= ClientFile.length) {
      console.log("se termino el cliente")
      console.log("system: ", currSystemFile[varControlSys].Segment)
      console.log("repCounter: ", repCounter)

      if (repCounter >= 1) {
        repCounter = 0;
        varControlSys++;
      } else {
        if (currSystemFile[varControlSys].Requirement === "M") {
          return { Status: "Failed" } 
        }
  
        varControlSys++;
      }
    } else {
      console.log("Cl:", ClientFile[varControlClient].name, " Pos: ", varControlClient, " Sys:", currSystemFile[varControlSys].Segment, " Pos: ", varControlSys);

      if ( ClientFile[varControlClient].name === currSystemFile[varControlSys].Segment && 
        repCounter <= +currSystemFile[varControlSys].Max) {
        repCounter++;
        varControlClient++;
        isValidated = true;
        segmentsValidated++;
      } else {
        console.log("holaaa")
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
          console.log("validated")
          varControlSys++;
          isValidated = false;
        } else {
          console.log("hola")
          if (currSystemFile[varControlSys].Requirement === "M") {
              if (reqLoop === "M") {
                  return { Status: "Failed", Position: varControlClient, Description: `Error Segment ${currSystemFile[varControlSys].Segment} is Mandatory and is not present in your current file!`}
              }
              return { Status: "ErrorLoop", value: varControlClient, segValidated: segmentsValidated };
          } else {
            varControlSys++;
          }
        }
      }

      if (varControlSys >= currSystemFile.length) {
        break;
      }
      result = checkRep(repCounter, varControlClient - 1, currSystemFile[varControlSys].Max, ClientFile[varControlClient - 1].name, reqLoop, isFirst);
      if (result.Status === "Failed"){
        return result.Description
      }
    }
  }
  
  if (varControlClient < ClientFile.length) {
    return "Failed more segments present in your file"
  }
  console.log("Final, cliente: ",varControlClient, " sistema: ", varControlSys )
  return { status: "Success"};
}

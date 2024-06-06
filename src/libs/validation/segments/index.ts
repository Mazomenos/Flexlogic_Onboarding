
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
  console.log("Largo del sistema: ", currSystemFile.length);
  console.log("Largo del cliente: ", ClientFile.length);
  console.log("Cl:", ClientFile[varControlClient].name, " Pos: ", varControlClient, " Sys:", currSystemFile[varControlSys].Segment, " Pos: ", varControlSys);

  while (varControlSys < currSystemFile.length) {
    console.log("inicia loop");

    if (varControlClient >= ClientFile.length) {
      console.log("se termino el cliente");

      if (repCounter >= 1) {
        repCounter = 0;
        varControlSys++;
      } else {
        if (currSystemFile[varControlSys].Requirement === "M") {
          // Agregar recorrido dentro de loop

          return { status: "Failed" } 
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
        repCounter = 0;





        // Manejo de loops
        if (currSystemFile[varControlSys].Segment === "LOOP") {
          let varControlLoop = 0;
          let diff = 1;
          let result;
          console.log(currSystemFile[varControlSys].Max)
          while (varControlLoop < +currSystemFile[varControlSys].Max && diff > 0) {
            console.log("loop")

            result = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
            console.log("result: ", result);
            console.log("Loop terminado");
            console.log("varControoooooooooooooooool:",varControlLoop);
            varControlLoop++;
            
            if (result.status === "Success") {
              varControlClient = result.posClient;
              console.log("hola2")
              if (varControlClient >= ClientFile.length) {
                console.log("breakaaa")
                varControlSys++
                break;
              }
              varControlLoop++;
            } else if (result.status === "Failed") {
              varControlSys++
              console.log("Failed")
              return { status: "Failed"}
            } else if (result.status === "Error") {
              varControlClient = result.posClient
              varControlSys++;
              diff = result.posClient - varControlClient
              console.log("diff:", diff)
              break;
            }
          }





        } else if (isValidated === true) {
          console.log("validated")
          varControlSys++;
          isValidated = false;
        } else {
          console.log("status: ")
          if (currSystemFile[varControlSys].Requirement === "M") {
              if (reqLoop === "M") {
                  if (isFirst) {
                    return { status: "Failed" }
                  }
                  return { status: "Failed", Position: varControlClient }
              }
              return { status: "Error", posClient: varControlClient, segValidated: segmentsValidated };
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
    if (isFirst) {
      return {status: "Failed", Desc:"Failed more segments present in your file"}
    }
    return {status: "Error", posClient: varControlClient}
  }
  console.log("Final, cliente: ", varControlClient, " sistema: ", varControlSys )
  if (isFirst) {
    return { status: "Success"};
  }
  return { status: "Success", posClient: varControlClient };
}



/**
    * Funcion encargada de checar la repeticion de un segmento dependiendo
    * de los parametros obtenidos, recibe el contador de repeticion del
    * segmento, la cantidad maxima del mismo segmento, el nombre o titulo
    * del segmento mismo y si esta en el primer ciclo o en el documento de
    * sistema en vez de un loop.
*/
function checkRep(repCounter: number, posClient: number, sysFileMax: string, segClientName: string, isFirst: Boolean) {
 
  // Verifica si se paso del contador de segmento evaluado
  if (repCounter > +sysFileMax && sysFileMax !== ">1") {

    // Verifica si el loop esta en el recorrido principal
    if (isFirst === true) {
      return { status: "Failed", Position: posClient, Description: "Max repetition limit reached for Segment:" + segClientName};
    } else {
      return { status: "ErrorRep", posClient: 0 }
    }
  }
  return { status: "Continue"}
} 


/**
    * Funcion principal recursiva cuya responsabilidad es la de devolver si
    * un archivo EDI es valido comparandolo en el documento del sistema que
    * se quiere comparar, este mismo recibe el archivo del sistema o el loop
    * en el que esta pues la funcion tiene el mismo comportamiento en un loop 
    * a que si esta en el archivo principal del sistema.
    * Igual recibe la informacion del archivo de cliente, su variable de control
    * o basicamente su posicion, tambien el requerimiento del loop y si esta en 
    * un loop o en el archivo principal.
*/
export default function ValStructure(currSystemFile: Array<any>, ClientFile: Array<any>, varControlClient: number, reqLoop: string, isFirst: Boolean): any {
  let isValidated = false;
  let repCounter = 0;
  let varControlSys = 0;
  let segmentsValidated = 0;
  let result;
  let rightNextLoop = false
  console.log("Largo del sistema: ", currSystemFile.length);
  console.log("Largo del cliente: ", ClientFile.length);

  /**
    * Ciclo principal que verifica si aun hay segmentos en el documento principal
    * del sistema o en el segmento loop que se este analizando pues la logica
    * aplica la misma para ambos 
  */
  while (varControlSys < currSystemFile.length) {

    // Filtro donde ve si se acabo los segmentos del cliente
    if (varControlClient >= ClientFile.length) {

      // Si antes hubo un segmento igual reinicia contador y avanza en sistema
      if (repCounter >= 1) {
        repCounter = 0;
        varControlSys++;
      } else {
        // Debe de hacer recorrido de los segmentos que quedan
        if (currSystemFile[varControlSys].Requirement === "M") {
          return { status: "Failed" } 
        }
        // Avanza si segmento de sistema no es obligatorio
        varControlSys++;
      }
    } else {
  
      /**
        * Ambos segmentos son iguales, avanza cliente, repetidor y cambia la 
        * bandera de si hubo validacion anteriormente. 
      */
      if ( ClientFile[varControlClient].name === currSystemFile[varControlSys].Segment && 
        repCounter <= +currSystemFile[varControlSys].Max) {
        repCounter++;
        varControlClient++;
        isValidated = true;
        segmentsValidated++;
      } else {

        // Si dos segmentos son diferentes se reinicia el contador
        repCounter = 0;

        // Filtro donde verifica si el segmento del sistema es un loop
        if (currSystemFile[varControlSys].Segment === "LOOP") {
          let varControlLoop = 0;
          let diff = 1;
          let result;
          let lastSegment = false;
          let segInitialLoop;

          /**
            * Logica de loop normal, este puede ir desde loops anidados 
            * y loops seguidos, aqui se genera el comportamiento y 
            * respuesta de los loops. 
            * El ciclo termina cuando se haya pasado el limite del contador 
            * de loops y si no hubo avance por parte de la variable de control 
            * del documento cliente
          */
          while (varControlLoop < +currSystemFile[varControlSys].Max && diff > 0) {
            
            /**
              * Filtro para poder ver si el segmento actual esta en su ultima posicion
              * lo cual procede activar la bandera con el nombre lastSegment
            */
            if (varControlSys >= currSystemFile.length - 1) {
              lastSegment = true;
            }

            /**
              * Filtro para veificar que el siguiente segmento es un loop al igual que 
              * 
            */
            if (!lastSegment && currSystemFile[varControlSys + 1].Segment === "LOOP" && currSystemFile[varControlSys].Segments[0].Segment === currSystemFile[varControlSys + 1].Segments[0].Segment) {
              segInitialLoop = ClientFile[varControlClient][1];
              rightNextLoop = true;
            }

            result = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
            varControlLoop++;

            // Checa si hay segmentos siguientes, por ejemplo si un loop dentro de otro loop es el ultimo segmento del mismo
            if (varControlSys >= currSystemFile.length - 1) {
              console.log("ultima posicion del sistema actual")
              lastSegment = true;
            }


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
              return { status: "Failed" }

            } else if (result.status === "ErrorNotEqual") {
              varControlClient = result.posClient
              //varControlSys++;
              diff = result.posClient - varControlClient
              console.log("diff:", diff)
              if (reqLoop === "M") {
                return {status: "Failed"}
              }
              break;

              // Checar condiciones cuando hay un error de repeticiones en un loop
            } else if (result.status === "ErrorRep") {
              console.log("cl: ", varControlClient, " sys: ", varControlSys);
              console.log("sys:",currSystemFile[varControlSys].Segment);
              console.log("cl:", ClientFile[result.posClient - 1].name)
              // Ocurre cuando se hay un segmento repetido maximo
              console.log("ErrorRep de verdad")
              console.log("lSeg: ", lastSegment)
              console.log("varible del result:", result.posClient)

              // Si el ultimo segmento del loop es el que se repite 
              if (result.lastItem) {

                // ADAPTAR POR SI HAY ALGUN SEGMENTO QUE SEA IGUAL AL FINAL DE
              
                // Checa si la siguiente posicion en el sistema es igual al ultimo segmento con el error
                if (!lastSegment && currSystemFile[varControlSys + 1].Segment === ClientFile[result.posClient - 1].name) {
                  varControlClient = result.posClient - 1;
                  break;

                  // el primer segmento de sistema es diferente al siguiente segmento de cliente
                } 

                console.log("vengo ayudar")

                if ( currSystemFile[varControlSys].Segments[0].Segment !== ClientFile[result.posClient - 1].name) {
                  console.log("el primer segmento de sistema es diferente al siguiente segmento de cliente")
                  varControlClient = result.posClient - 1;
                  break;
                }

                if (rightNextLoop && segInitialLoop !== ClientFile[result.posClient][1]) {
                  console.log("es diferente tambien el siguiente")
                  varControlClient = result.posClient - 1;
                  
                } else {
                  console.log(varControlClient)
                  console.log("Despues de errorLoop, continua el ciclo")
                }



              } else {
                return { status: "Failed" }
              }

              
              // Checar cuando se termina un loop con aun unos cuantos segmentos de cliente
            } else if (result.status === "ErrorEndSystem") {

              console.log("ErrorEndSystem")
              console.log("Cl:", ClientFile[varControlClient].name, " Pos: ", varControlClient, " Sys:", currSystemFile[varControlSys].Segment, " Pos: ", varControlSys);

              
              
                
              // Si el siguiente segmento del cliente es igual a la primer posicion del loop, que continue el loop
              if (currSystemFile[varControlSys].Segments[0].Segment === ClientFile[result.posClient].name) {
                console.log(varControlClient)
                console.log(result.posClient)
                console.log("Continua el loop despues de errorendsystem")


                if (!lastSegment && currSystemFile[varControlSys + 1] === "LOOP" && ClientFile[result.posClient].name === currSystemFile[varControlSys + 1].Segments[0].Segment) {
                  console.log("es igual al siguiente")

                  console.log(segInitialLoop)
                  console.log(ClientFile[result.posClient][1])
                  if (rightNextLoop && segInitialLoop !== ClientFile[result.posClient][1]) {
                    console.log("es diferente tambien el siguiente")
                    varControlClient = result.posClient;
                    rightNextLoop = false;
                    break;
                  }
                }

                varControlClient = result.posClient;
                console.log("no paso Si el siguiente segmento del cliente es igual a la primer posicion del loop, que continue el loop")
                continue

                // Si el segmento de cliente anterior es igual al siguiente segmento del sistema, se regresa uno para verificar ese
              } else if (!lastSegment && ClientFile[varControlClient - 1].name === currSystemFile[varControlSys + 1].Segment) {
                varControlClient--;
                repCounter = 0;
                break;

                // El detenemos el ciclo pues el siguiente del sistema es diferente al principio del loop
              } else if (currSystemFile[varControlSys].Segments[0].Segment !== ClientFile[varControlClient].name) {
                console.log("hola")
                break;
                
                // Cuando el siguiente segmento es un loop 
              } else if (!lastSegment && currSystemFile[varControlSys + 1].Segment === "LOOP") {
                console.log("siguiente segmento es loop")
                varControlClient = result.posClient;

                break;
              }


              varControlClient = result.posClient;
              console.log(result)
              break;

            }
          }
          varControlSys++;

          // Despues de que dos segmentos se validen y baje el del sistema, controla segmentos repetidos al solo bajar cuando ya sean diferentes
        } else if (isValidated === true) {
          console.log("validated")
          varControlSys++;
          isValidated = false;

        } else {
          console.log("Los segmentos son diferentes")

          // Dos segmentos son diferentes y el del sistema es obligatorio
          if (currSystemFile[varControlSys].Requirement === "M") {

            // No estamos en un loop
            if (isFirst) {
              return { status: "Failed" }

              // Estamos en un loop obligatorio
            } else if (reqLoop === "M") {
              return { status: "Failed", Position: varControlClient }
            }
              // Estamos en un loop no obligatorio
            return { status: "ErrorNotEqual", posClient: varControlClient, segValidated: segmentsValidated };
          
            // El segmento del sistema no era obligatorio
          } else {
            varControlSys++;
          }
        }
      }



      // Chequeo de la posicion en el sistema
      if (varControlSys >= currSystemFile.length) {
        break;
      }
      console.log(isFirst)
      console.log("Largo del sistema: ", currSystemFile.length);

      // Chequeo de repeticiones
      result = checkRep(repCounter, varControlClient - 1, currSystemFile[varControlSys].Max, ClientFile[varControlClient - 1].name, isFirst);

      // El chequeo dio error donde el maximo estaba fuera de cualquier loop
      if (result.status === "Failed"){
        return { status: "Failed"}

        // Dio error pero estabamos dentro de un loop
      } else if ( result.status === "ErrorRep") {


        console.log("debugeo en errorrep ----------------")
        
        console.log(varControlClient)
        console.log(ClientFile.length)
        console.log(varControlSys)
        console.log(currSystemFile.length)

        // El segmento repetido es el ultimo
        if (varControlSys  === currSystemFile.length - 1) {
          console.log("Ultimo segmento del loop: ", currSystemFile[varControlSys])
          return  { status: result.status, posClient: varControlClient, lastItem: true, segValidated: segmentsValidated };
        } else {
          console.log("popopopo")
          for (const indSeg of currSystemFile.slice(varControlSys + 1)) {
            console.log(indSeg.Segment)
            if (indSeg.Requirement === "M") {
              console.log("se encontro obligatorio")
              return  { status: "Failed" };
            }
          }
          return { status: result.status, posClient: varControlClient, lastItem: true, segValidated: segmentsValidated };
        }


        //return  { status: "Failed" };
      }
    }
  }
  
  // Se acabo los segmentos del sistema o loop
  // Aun quedaban segmentos en el documento de cliente
  if (varControlClient < ClientFile.length) {

    // Fuera de loop, significa que hay mas segmentos en cliente que los que deberia
    if (isFirst) {
      return {status: "Failed", Desc:"Failed more segments present in your file"}
    }
    // Dentro de loop por lo que aun podria haber segmentos en sistema

    console.log("lo que busco")
    console.log("cl: ", varControlClient, " sys: ", varControlSys);


    // Checa si viene de un loop o no
    if (currSystemFile[varControlSys - 1].Segment === "LOOP") {
      console.log("era loop")
      return {status: "ErrorEndSystem", posClient: varControlClient, firstSeg: currSystemFile[0], segValidated: segmentsValidated}
    } else {
      return {status: "ErrorEndSystem", posClient: varControlClient, firstSeg: currSystemFile[0].Segment, lastSegSys: currSystemFile[varControlSys - 1].Segment, segValidated: segmentsValidated}
    }

  }


  console.log("Final, cliente: ", varControlClient, " sistema: ", varControlSys )
  if (isFirst) {
    return { status: "Success"};
  }
  return { status: "Success", posClient: varControlClient };
}

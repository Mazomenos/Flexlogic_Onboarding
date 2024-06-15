
/**
    * -------------------------------------------------------------
    * ARCHIVO PRINCIPAL PARA VALIDADOR DE ESTRUCTURA
    * -------------------------------------------------------------
    * Este mismo se compone de dos funciones principales 
    * cuya funcion es devolver si la estructura del documento
    * subido por el cliente es igual al que se quiere comparar 
    * con el que se tiene en sistema o el documento de guia 
    * para un Trading Partner.
    * 
    * ULTIMA ACTUALIZACION: 11-Junio-2024
    * 
    * NOTAS:
    * - Se puede mejorar varias cosas como dividir las funciones 
    *   repetidas en individuales como el chequeo de repeticiones
    * - Generar mas opciones o filtros para tener mensajes de 
    *   errores con mayor descripcion
    * -------------------------------------------------------------
*/


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
  * --------------------------------------------------------------------------
  * Funcion principal recursiva cuya responsabilidad es la de devolver si
  * un archivo EDI es valido comparandolo en el documento del sistema que
  * se quiere comparar, este mismo recibe el archivo del sistema o el loop
  * en el que esta, pues la funcion tiene el mismo comportamiento en un loop 
  * al igual que el archivo principal del sistema con el que se quiere comparar.
  * Igual recibe la informacion del archivo de cliente, su variable de control
  * o basicamente su posicion, tambien el requerimiento del loop y si esta en 
  * un loop o en el archivo principal.
  * --------------------------------------------------------------------------
*/
export default function ValStructure(currSystemFile: Array<any>, ClientFile: Array<any>, varControlClient: number, reqLoop: string, isFirst: Boolean): any {
  let isValidated = false;
  let repCounter = 0;
  let varControlSys = 0;
  let segmentsValidated = 0;
  let result;
  let rightNextLoop = false;

  /**
    * Ciclo principal que verifica si aun hay segmentos en el documento principal
    * del sistema o en el segmento loop que se este analizando pues la misma logica
    * aplica para ambos 
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
          return { status: "Failed", Position: varControlClient, Description: "Max repetition limit reached for Segment" } 
        }
        // Avanza si segmento de sistema no es obligatorio
        varControlSys++;
      }
    } else {
  
      /**
        * Ambos segmentos son iguales, avanza cliente, repetidor y cambia la 
        * bandera de si hubo validacion anteriormente. 
      */
      console.log("cheque de segment")
      console.log("cl:", ClientFile[varControlClient].name, " pos: ", varControlClient, " sys:", currSystemFile[varControlSys].Segment, " pos: ", varControlSys)
      console.log(repCounter)

      if ( ClientFile[varControlClient].name === currSystemFile[varControlSys].Segment && (repCounter <= +currSystemFile[varControlSys].Max || currSystemFile[varControlSys].Max === ">1")) {
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
              * Filtro para verificar que el siguiente segmento es un loop al igual que 
              * los siguientes segmentos de los mismos loops son iguales
            */
            if (!lastSegment && currSystemFile[varControlSys + 1].Segment === "LOOP" && currSystemFile[varControlSys].Segments[0].Segment === currSystemFile[varControlSys + 1].Segments[0].Segment) {
              segInitialLoop = ClientFile[varControlClient][1];
              rightNextLoop = true;
            }

            // Se aplica la misma logica al mandar el arreglo del loop para que lo recorra
            result = ValStructure(currSystemFile[varControlSys].Segments, ClientFile, varControlClient, currSystemFile[varControlSys].Requirement, false);
            varControlLoop++;

            /**
              * Otro filtro para poder ver si el segmento actual esta en su ultima
              * posicion e igual activa bandera
            */
            if (varControlSys >= currSystemFile.length - 1) {
              lastSegment = true;
            }

            /**
              * -------------------------------------------------------------------------- 
              * El siguiente bloque tiene el enfoque de controlar los resultados del 
              * recorrido de los loop, pues cuando se termina un ciclo este mismo devuelve 
              * un status que se interpreta y despues hace alguna accion como avanzar la 
              * posicion del cliente o del sistema en si.
              * Estos status pueden ir desde Success, Failed, ErrorNotEqual, Errorrep y
              * ErrorEndSystem.
              * --------------------------------------------------------------------------
            */

            /**
              * Primera condicional donde si el status es Success se actualiza la posicion
              * del documento de cliente y ademas verifica si se acabaron los segmentos del
              * documento de cliente, si es asi termina el ciclo de loops y continua a las 
              * siguientes condicionales
            */
            if (result.status === "Success") {
              varControlClient = result.posClient;
              if (varControlClient >= ClientFile.length) {
                varControlSys++
                break;
              }
              varControlLoop++;

              /**
                * Esta condicion esta hecha para cuando se encontro un error de estructura 
                * critico por lo que el validador no deberia de seguir comparando o basicamente
                * un freno
              */
            } else if (result.status === "Failed") {
              varControlSys++
              return { status: "Failed", Position: varControlClient, Description: result.Description }

              /**
                * Esta condicion esta hecha cuando se encontro un error de comparacion entre dos
                * segmentos, significa que habia un segmento en el documento de cliente que no deberia
                * de estar ahi segun el documento de sistema y ve si el loop en el que esta es obligatorio,
                * si lo es, pues el validador debe detenerse
              */
            } else if (result.status === "ErrorNotEqual") {
              varControlClient = result.posClient
              diff = result.posClient - varControlClient
              if (reqLoop === "M" && !isFirst) {
                return {status: "Failed", Position: varControlClient, Description: "Segment" + currSystemFile[varControlSys] + " should be present in your file in the " + varControlClient + "column in your file! Be sure to see the guidelines for this document!"}
              }
              break;

              /**
                * Condicion que ocurre cuando se encontro un error de repeticion pero hay condiciones
                * que se puede encontrar este error y el validador debera seguir corriendo
              */
            } else if (result.status === "ErrorRep") {

              // Si el ultimo segmento del loop es el que se repite 
              if (result.lastItem) {
              
                // Checa si la siguiente posicion en el sistema es igual al ultimo segmento con el error
                if (!lastSegment && currSystemFile[varControlSys + 1].Segment === ClientFile[result.posClient - 1].name) {
                  varControlClient = result.posClient - 1;
                  break;
                } 

                // Checa que el primer segmento del loop actual y el segmento del cliente donde termino sean diferentes
                if (currSystemFile[varControlSys].Segments[0].Segment !== ClientFile[result.posClient - 1].name) {
                  varControlClient = result.posClient - 1;
                  break;
                }

                // Ve si el segmento del loop actual sea del mismo loop o diferente al anterior
                if (rightNextLoop && segInitialLoop !== ClientFile[result.posClient][1]) {
                  varControlClient = result.posClient - 1;
                  
                }
              } else {
                return { status: "Failed", Position: varControlClient, Description: "Max repetition limit reached for segment " + ClientFile[result.posClient].name + " in the " + result.posClient + " column in your file! Be sure to see the guidelines for this document!" }
              }

              /**
                * Este error es el mas comun que se va encontrar el sistema pues ocurre cuando el loop se termino,
                * por lo que puede ocurrir varias situaciones por lo que tenemos que delimitar que hara despues
              */
            } else if (result.status === "ErrorEndSystem") {
                              
              // Si el siguiente segmento del cliente es igual a la primer posicion del loop, que continue el loop
              if (currSystemFile[varControlSys].Segments[0].Segment === ClientFile[result.posClient].name) {

                // Filtro cuando el loop no es el ultimo segmento del bloque en el que se encuentra y el siguiente el loop al igual que sus segmentos sean iguales
                if (!lastSegment && currSystemFile[varControlSys + 1] === "LOOP" && ClientFile[result.posClient].name === currSystemFile[varControlSys + 1].Segments[0].Segment) {

                  // Ve si el segmento del loop actual sea del mismo loop o diferente al anterior
                  if (rightNextLoop && segInitialLoop !== ClientFile[result.posClient][1]) {
                    varControlClient = result.posClient;
                    rightNextLoop = false;
                    break;
                  }
                }

                varControlClient = result.posClient;
                continue

                // Si el segmento de cliente anterior es igual al siguiente segmento del sistema, se regresa uno para verificar ese
              } else if (!lastSegment && ClientFile[varControlClient - 1].name === currSystemFile[varControlSys + 1].Segment) {
                varControlClient--;
                repCounter = 0;
                break;

                // El detenemos el ciclo pues el siguiente del sistema es diferente al principio del loop
              } else if (currSystemFile[varControlSys].Segments[0].Segment !== ClientFile[varControlClient].name) {
                break;
                
                // Cuando el siguiente segmento es un loop 
              } else if (!lastSegment && currSystemFile[varControlSys + 1].Segment === "LOOP") {
                varControlClient = result.posClient;

                break;
              }

              // Si ninguno de los filtro freno el ciclo, este mismo se repetira
              varControlClient = result.posClient;
              break;

            }
          }

          // Si se termino el bucle actual, este mismo avanza hacia la siguiente posicion en el sistema actual
          varControlSys++;

          // Despues de que dos segmentos se validen y baje el del sistema, controla segmentos repetidos al solo bajar cuando ya sean diferentes
        } else if (isValidated === true) {
          varControlSys++;
          isValidated = false;

        } else {
          console.log("diferentes")

          // Dos segmentos son diferentes y el del sistema es obligatorio
          if (currSystemFile[varControlSys].Requirement === "M") {

            // No estamos en un loop
            if (isFirst) {
              return { status: "Failed", Position: varControlClient, Description: "Segment " +  currSystemFile[varControlSys].Segment + " should be present in your file!"}

              // Estamos en un loop obligatorio
            } else if (reqLoop === "M") {
              return { status: "Failed", Position: varControlClient,  Description: "Segment " +  currSystemFile[varControlSys].Segment + " should be present in your file and is inside one of your loops near"}
            }
              // Estamos en un loop no obligatorio
            return { status: "ErrorNotEqual", posClient: varControlClient, segValidated: segmentsValidated };
          
            // El segmento del sistema no era obligatorio
          } else {
            varControlSys++;
          }
        }
      }

      console.log("fuera de la condicional ")
      /**
        * El siguiente bloque se enfoca en hacer comparaciones y validaciones despues de que hacer 
        * acciones o movimientos en las posiciones de los segmentos, aqui se verifica las repeticiones
        * de los mismo y la posicion de las mismas variables de control
      */
      // Chequeo de la posicion en el sistema
      if (varControlSys >= currSystemFile.length) {
        console.log("llego al final el segmento")
        break;
      }

      // Chequeo de repeticiones
      result = checkRep(repCounter, varControlClient - 1, currSystemFile[varControlSys].Max, ClientFile[varControlClient - 1].name, isFirst);

      console.log("despues del checkrep")
      console.log(result)

      // El chequeo dio error donde el maximo estaba fuera de cualquier loop
      if (result.status === "Failed"){
        return { status: "Failed", Position: varControlClient,Description: result.Description}

        // Dio error pero estabamos dentro de un loop
      } else if ( result.status === "ErrorRep") {

        // El segmento repetido es el ultimo
        if (varControlSys  === currSystemFile.length - 1) {
          return  { status: result.status, posClient: varControlClient, lastItem: true, segValidated: segmentsValidated };
        } else {

          // Checa si hay algun segmento adelante que sea obligatorio, si lo es, debera tenerse el validador
          for (const indSeg of currSystemFile.slice(varControlSys + 1)) {
            if (indSeg.Requirement === "M") {
              return  { status: "Failed", Position: varControlClient, Description: "Max repetition limit reach por segment " + ClientFile[varControlClient].name };
            }
          }
          return { status: result.status, posClient: varControlClient, lastItem: true, segValidated: segmentsValidated };
        }
      }
    }
  }
  
  /**
    * --------------------------------------------------------------------------------------------------- 
    * Este es el ultimo bloque del validador, esta seccion suele pasar cuando se termina todos los 
    * segmentos del sistema actual ya sea del loop o del archivo principal del que se esta comparando.
    * Aqui se buscara saber si aun hay segmentos dentro del archivo del cliente al igual que devolver el 
    * error de ErrorEndSystem el cual pasa cuando se acaban los segmentos dentro del sistema actual.
    * De igual manera aqui verifica si el ultimo segmento verificado no esta en un loop y devuelve el 
    * estado success lo que seria lo ultimo que veria el cliente al subir su documento.
    * --------------------------------------------------------------------------------------------------- 
  */

  // Verifica si aun quedan segmentos en el documento de cliente
  if (varControlClient < ClientFile.length) {

    // Fuera de loop, significa que hay mas segmentos en cliente que los que deberia
    if (isFirst) {
      return {status: "Failed", Position: varControlClient, Description: "Failed more segments present in your file than there should be, see manual for more information regarding the necessary segments!"}
    }

    // Checa si viene de un loop o no
    if (currSystemFile[varControlSys - 1].Segment === "LOOP") {
      return {status: "ErrorEndSystem", posClient: varControlClient, firstSeg: currSystemFile[0], segValidated: segmentsValidated}
    } else {
      return {status: "ErrorEndSystem", posClient: varControlClient, firstSeg: currSystemFile[0].Segment, lastSegSys: currSystemFile[varControlSys - 1].Segment, segValidated: segmentsValidated}
    }
  }

  // Si todo esta correcto y no esta en un loop, devuelve el estado success solo sin informacion
  if (isFirst) {
    return { status: "Success"};
  }
  return { status: "Success", posClient: varControlClient };
}

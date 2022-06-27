//Ciclos
//estos ciclos pueden ser una o varias sentencias que se repiten, y luego se reevalua la condicion, 
//esto mientras la condicion sea verdadera, se va a seguir repitiendo la cantidad de veces que se haya declarado

//--------------
//el Ciclo While, se le da una condicion, y mientrs esta condicion sea verdadera se va a continuar ejecutando, hasta que sea falsa la condicion

let contador =0;//se necesita de un contador que permita llevar la cuenta de cuantas veces va ejecutandose el ciclo
while(contador < 10){//es menor  a la cantidad de veces que se puede ejecutar el ciclo
  console.log(contador);
  contador++;
}

//----------------

//Ciclo DO-WHILE

//se va a ejecutar siempre una vez, y luego va a realizar las validaciones la cantidad de veces que se necesite, 

let contadorDWL =0;
do{
  console.log(contadorDWL);
  contadorDWL++;
}while(contadorDWL  < 3);
console.log("fin ciclo while");

//-----------------

//ciclo FOR

//el ciclo FOR, inicializa el diagrama, y revisa la condicion, en caso que sea cierta repite el codigo, y tiene una seccino para incrementar o decrementar las cantidades automaticament, hasta que la variable declare falsa la condicion, y termine la ejecucion
for (let contadorFor = 0;contadorFor < 3; contadorFor ++){//si quiero inicializar mas variables , luego de la primer variable inicializada con LET, se pone una ( , ) y se inicializa la siguiente, separando por coma

    console.log(contadorFor);
  }
  console.log("fin del ciclo For");

  //---------------------

  //Break
  //se utiliza para romper el ciclo que se este ejecutando

  for (let contadorFor1 = 2; contadorFor1 <= 10; contadorFor1++){
    if(contadorFor1 % 2== 0){
    console.log(contadorFor1);
      break;//si ponemos break, al primer resultado que muestre, ya termina
      }
  }
  console.log("fin del ciclo for")

  //---------------------

  //Uso del Continue

  //el continue hace que si se cumple la condicion marcada, no muestre cierto resultado, pero continue imprimiendo el resultado (saltea a la siguiente iteracion)
//en este caso, si el numero es diferente a un numero par, no lo imprime y muestra el siguiente dato, evitando mostrar los numeros impares
for (let contadorCont = 0; contadorCont <= 10; contadorCont++){
    //en caso de que el numero no sea par, no imprimir el valor y pasar al siguiente
      if(contadorCont %2 !== 0){
        continue;//ir a la siguiente iteracion
      }console.log(contadorCont);
    }

    //------------------------------------------------

//labels (no es recomendable pero se usa), nos permite elegir a que parte de nuestro programa ir, al ya tenerla etiquetada la parte del codigo que queramos

inicio:
for (let contador=0; contador <= 10; contador++){
  if(contador % 2 !== 0){
    continue inicio; 
    //aca se realiza el continue, y luego con "inicio" se vuelve al inicio de la sentencia
    //si ponemos un break la secuencia "label" se va a cortar
  }
  console.log(contador);
}

//-------------------------
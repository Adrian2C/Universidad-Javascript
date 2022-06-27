//01 - Sentencias de Control

let condicion = false;

if (condicion){
  console.log("condicion verdadera");
}else{
  console.log("condicion falsa");
}

//-----------------------//
//ejemplos en js

let numero = 5;

if(numero==1){
  console.log("Numero 1");
}else if(numero==2){
  console.log("otro numero");
} else if(numero ==3){
  console.log("numero 3");
}else if(numero==4){
  console.log("numero 4");
}else{
  console.log("no molestes")
}
//-----------------
//declarar un mes y ver a que mes del año corresponde

let mes= 4;
let estacion;

if (mes ==1|| mes ==2 || mes==12){
  estacion = "Invierno";
} else if (mes ==3|| mes ==4 || mes==5){
  estacion = "Primavera";
}else if (mes ==6 || mes ==7 || mes==8){
  estacion = "Verano";
}else if (mes ==9|| mes ==10 || mes==11){
  estacion = "Otoño";
}else{
  estacion="Valor Incorrecto";
}

console.log(estacion);

//-------------------
//ejercicio calculo hora del dia

let hora =15 ;
let mensaje;

if (hora >=0 && hora <=5){
  mensaje = "Durmiendo";
}else if(hora >= 6 && hora <= 11){
  mensaje = "Buenos Dias";
}else if(hora >=12 && hora<= 18){
  mensaje ="Buenas Tardes";
}else if(hora >= 19 && hora<=24 ){
  mensaje="Buenas noches";
}else{
	mensaje="hora no valida";
}

console.log(mensaje);
//-------------------------

//estructura Switch
//permite analizar una expresion y dependiendo el caso que tenga, es la sentencia a la que va a saltar
//en esta estructura se utiliza la sentencia break en caso de que no cumpla las condiciones de una sentencia, para saltar a otra
//y se utiliza la sentencia Switch para realizar ese salto, y cuando se cunmple el caso y la sentencia se le da fin a la expresion

let numero = 10;
let numeroTexto= 'Valor desconocido';

switch (numero){
  case 1:
    numeroTexto='numero uno';
    break;
  case 2:
    numeroTexto ='numero 2';
    break;
  case 3:
    numeroTexto='numero 3';
    break;
  case 10:
    numeroTexto='numero 10';
    break;
  default:
    numeroTexto='caso no encontrado';
}
console.log(numeroTexto);

//----------------------------------
//Ejemplo de estaciones del año con SWITCH

let mes = 8;
let estacion= "Estacion Desconocida";

switch ( mes ){ //los casos se comparan atraves de la variable mes
  case 1: case 2 : case 12: //aca se estan agrupando los casos igual que en la sentencia IF/ELSE
    estacion ="invierno";
    break;
  case 3: case 4: case 5:
    estacion="Primavera";
    break;
  case 6: case 7: case 8:
    estacion="verano";
    break;
  case 9: case 10: case 11:
    estacion:"Otoño";
    break;
  default:
    estacion="valor incorrecto";
}

console.log(estacion);

//--------------
//comparacion estricta al usar SWITCH


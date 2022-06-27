//operadores aritmeticos

/*

+ "adicion"
- "substraccino"
* "multiplicacion"
** "exponente"
/ "division"
% "modulo(restante de la division)""
++ "incremento"
-- "decremento"
*/

let a =3, b = 2;
let z= a+b;
document.write(a,"<br>",b,"<br><br>");
document.write(z + "<br>");

let y=a-b;
document.write(y + "<br>");

let x=a*b;
document.write(x + "<br>");

let w=a/b;
document.write( w + "<br>");

let r=a%b;
document.write(r + "<br>");

let s=a*b;
document.write(s + "<br>");

let t=a*b;
document.write(t + "<br><hr>");
/*
u= ++a//pre incremento
o= b++; //post incremento
document.write( u + "<br>");
document.write(o + "<br><hr>");

/* ------------------------- */
// Operadores de Asignacion

//let a = 3;

//operador compueto
a +=3 //es lo mismo que a = a + 3;
document.write(a+"<br>");

a=-2; //esto es lo mismo que a = a-2;
document.write(a +"<br><hr>");
/* ---------------------*/

//Operadores de comparacion
let uno=3,dos=2,c="3",d=3;

//let comparacion = uno != dos;
//let comparacion = uno == dos;
let comparacion = uno === dos;
//esto es para saber si dos variables
document.write(comparacion+"<br>");

/* ---------------- */
//Operadores Relacionales

let comparacion1 = uno < dos;
document.write(comparacion1);
let comparacion2 = uno<=d;
console.log(comparacion2);

//Ejercicio: averiguar numero PAR
let par = 2;
if (par % 2 == 0){
    document.write("<br>el numero es par <br>");
} else {
    document.write("<br>El numero es impar <br>");
}
//ejercicio es mayor de Edad
let edad = 20, adulto = 18;
if (edad >= adulto){
    document.write("es un adulto <br>");
} else {
    document.write("es menor de edad <br>");
}

//Operadores Logicos
//AND  --> &&

let operadorAnd = 5;
let valMin  = 0, valMax =10;

if(operadorAnd >= valMin && operadorAnd <= valMax ){
    document.write("dentro de rango <br>");
} else {
    document.write("Fuera de rango <br>");
}

//operador OR

let vacaciones = true, diaDescanso = false;
if (vacaciones || diaDescanso){
    document.write("operador OR: El padre puede asistir al juego del hijo <br>");
} else {
    document.write("operador OR: El padre esta ocupado <br>");
}

//Operador Ternario
//operador similar al if/else, donde dependiendo si es A o B la respuesta, es el resultado que vamos a obtener

let ternari = (3 < 2) ? "verdadero" : "falso";
document.write("ternario 1: " +ternari +"<br>");

let ejemploTernario = 9;
ternari = (ternari % 2 == 0 ) ? "numero par" : "numero impar";
document.write("ternario 2 " + ternari +"<br>");
//--------------------------
//Convertirm String a Number

let miNumero = "19"; 
document.write(typeof miNumero + "<br>");
//para convertir esta variable tipo string a number

let edad1 = Number(miNumero);//se convierte string a number, con la variable Number
if(isNaN(edad1)){// con esta variable se verifica si el numero es Number o tiene letras
    document.write("no es un numero <br>");//si ve que tiene letras hace esto
}else{//si corroboro que es un numero, continua aca
    if(edad1 >= 18){
    document.write("puede votar <br>");
}else {
    document.write("muy joven para votar <br>");
}
}
document.write(typeof edad1 + "<br>");    

//ejemplo con operador ternario
if (isNaN(edad1)){
    document.write("no es un nunmerooo <br>");
} else {

    let Ternario = (edad1 >= 18) ? "puede votar" : "muy hoven para votar"; //esto acorta todas las sentencias del if/else, en una sola linea
    document.write(Ternario + "<br>");
}
//esto nos ayuda a verificar que una variable sea Number, y permitir que el codigo se siga ejecutando, o que nos advierta que no hay

//precedencia de operadores

let x1 = 5;
let y2 = 10;
let z3 = ++x1 + y2--;
document.write(x1 + "<br>");
document.write(y2 + "<br>");
document.write(z3 + "<br>");
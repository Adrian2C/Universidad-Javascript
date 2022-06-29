//Funciones
miFuncion(9,4);//aca se hace uso del Hoisting

//una funcion es un codigo reutilizable, que se lo puede llamar las veces que se lo necesite. pero primero se necesita declarar una funcion
//primero se pone Function y luego se declara el nombre(argumento de la funcion)
function miFuncion( a, b){
  console.log("Suma: "+(a+b));
}
//llamada de la funcion

//la llamada puede darse en cualquier momento de la declaracion, sea antes o despues
//esto se llama Hoisting,
miFuncion(13,4);

//-----------------------------
//Uso del Return

//aveces necesitamos que la funcion nos devuelva el resultado de la funcion, asi que usamos el return

function miFuncion1 (c,d){
  return c+d;
}
//llamado de la funcion
let resultado = miFuncion1(33,5);//resultado guarda el valor generado en miFuncion1
console.log(resultado);

//-----------------------------------
//cuando trabajamos con funciones, tambien podemos asignarlas a una variable, asi evitamos poner un nombre a una funcino, asi se pasan a llamar funcinoes de tipo expresion, o funciones anonimas

//declaracion de tipo expresion
let x = function(y,z){ // aca se asigna la variable "X" a la funcion
  return y+z
};

resultado1 = x(4,5);//aca llama la variable "X", ejecutando la funcion, y asignandola a resultado1
console.log(resultado1); //muestra el valor obtenido de la funcion que se asigno a la variable resultado1 

//-----------------------

//funciones Autoejecutables

//esta funcion es de unica llamada, y se llama y se ejecuta en el mismo momento. Sirve para invocar una funcion en html, cuando se necesite que se realize una funcion luego de que suceda algo en la pagina, y se ejecute soo una vez
(function(){
  console.log("ejecutando la funcion");
})();

//si quiero que la funcion tenga variables, se la declara al comienzo y luego al final
(function(a,b){
 console.log("ejecutando funcion: " + (a+b));
 })(99,3);
//---------------------------------

//Funciones como Objeto

//console.log(typeof miFuncion);

//las funcion puede ser considerado como un objeto y tener sus propiedades y clases
//para saber cuantos argumentos tuvo una funcion se usa "arguments", pero esto se utiliza dentor de la funcion
function miFuncion(a,b){
    console.log(arguments.length);//con esto muestra cuantos argumentos hay
    return a+b;
  }
  
  var miFuncionTexto = miFuncion.toString();
  //con toString, permite que pasemos a texto la funcion, para verla como cadena de texto todo lo que este dentro de la funcion
  console.log(miFuncionTexto);

//---------------

//Funciones tipo Flecha

//comparando la declaracion de una funcion y funcion flecha

let sumar = function (a,b){ return a + b};

resultado =sumar (1,2);
console.log(resultado);

//en vez de usar let, usamos cons, se puede omitir la palabra "Function"
//el operador flecha se hace =>, y no se necesita poner return, xq ya queda implicito
//la palabra function, se remplaza por el =, luego se declara los parametros igual, y en vez de return se usa la flecha.
//toda esta funcion se asigna a un espacio de memoria, x eso se declara la const
const sumarFuncionTipoFlecha = (a,b) => a + b;

//luego se asigna una variable para el resultado,
resultado = sumarFuncionTipoFlecha(99,13);
//se llama al resultado y lo mostramos en la consola
console.log(resultado);

//-------------------------------------------
//parametros y argumentos

//cuando definimos una funcion, las variables que recibe dentro del parentensis luego de ser declarada la funcion, son los paramentros.
//lista de valores  que recibe cuanod creamos la funcion

//valores finales que reciben los parametros, luego de declarar la funcion

let sumar = function(a,b){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments);
  console.log(arguments.length);
  return a + b
};

resultado = sumar (6,44);
console.log(resultado);
//-------------------------------------------
//parametros y argumentos

//cuando definimos una funcion, las variables que recibe dentro del parentensis luego de ser declarada la funcion, son los paramentros.
//lista de valores  que recibe cuanod creamos la funcion

//valores finales que reciben los parametros, luego de declarar la funcion

let sumar = function(a,b){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments);
  console.log(arguments.length);
  return a + b
};

resultado = sumar (6,44);
console.log(resultado);
//-----------------------------------------

//-------------------------------------
//Ejemplo: sumar todos los argumentos

let resultado = sumarTodo(5, 4, 13, 10, 9,);
console.log(resultado);

function sumarTodo(){
  let suma = 0;
  
  for(let i = 0; i < arguments.length; i++){
    suma += arguments[i];//esto va a hacer que recorra todos los argumentos, uno a uno
  }
  return suma;
}

//-------------------
//paso por valor y paso por referencia

//tipos no objetos
let x = 10;//valor primitvo, sin propiedades ni metodo

function cambiarValor(a){
  a=20;//la funcion cambiarValor, declara que la variable a vale 20
}
cambiarValor(x);//el valor de la funcion cambia al de la x, osea cambia a 10
console.log(x);
//console.log(a);// da error

//lo que paso es que la variable "A", se creo en la funcion, y luego se cambia por el valor de otra, y asi, la "A" se destruye siendo sustituida por la nueva variable



//-------------------------------------
//paso por referencia en funciones

//a diferencia de una variable, las opciones dentro de las llaves de un objeto, se llaman referencias, dado que estas son referencias a un objeto, que atraves de la variable persona, se puede obtener los valores de atributo del objeto

const persona = {
  nombre :'Juan',
  apellido:'Perez',
  edad:25
}

function cambiarValorObjeto(p1){///se puede llamar igual que la variable anterior
  p1.nombre = 'Carlos'; //apuntamos a la referencia de un objeto
  p1.apellido='Lara'; //y sobreescribimos los valores
}
//paso por referencia
cambiarValorObjeto( persona );
console.log(persona);
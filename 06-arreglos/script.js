//Arreglos,

//un arreglo es un tipo object, que permite almacenar varios valores
//para declarar un arreglo hay diferentes maneras

//declarar arreglo + variable = new array/

//let autos = new Array("BMW","Mercedes Benz","Volvo"); //manera antigua
const autos =['bmw','mercedes benz','volvo']; //dado que ya no se va a modificar se la decalra como constante
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//utilizando un ciclo FOR
for(let i=0; i < autos.length;i++){
	console.log(autos[i]);//asi recorre todos los valores del array
	console.log(i + ' : ' + autos[i]);//asi recorre todos los valores del array, sumando el numero de posicion
}

//--------------------------
//como modificar los elementos de un arreglo, y como agregar mas

const autos =['bmw','mercedes benz','volvo']; 

autos[1] = "MercedesBenz"; //mencionando la posicion, y luego declarando un nuevo valor, se modifica el valor seleccionado

autos.push("Audi"); //agregar elementos al final del arreglo
console.log(autos);


console.log(autos.length);
autos[autos.length] = "Cadillac;"//asi se agrega un elemento  normal al arreglo

autos[6] ="Porsche";//asi se agrega un elemento dejando un espacio vacio
console.log(autos);


//como preguntar si es un array/arreglo

//se agrego al variable isArray
console.log( Array.isArray(autos)); //arrojo true, asi que esta instancia es un array

//otra forma es con "instanceof"
console.log(autos instanceof Array);
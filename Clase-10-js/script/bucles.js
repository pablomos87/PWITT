//arreglos

let banana = "banana";
let manzana = "manzana";
let peras = "pera";

//array, arreglo, vecto

//Indice=posición de los elementos //(posición 0=mangos, posición 1=bananas, etc)
let frutas = ["mangos", "bananas", "manzanas","peras", "ananá"];
//Indice //posición (Índice) 0=Pepe, Índice 1=DNI, etc... y Juan y Mario es un solo índice, el número 5.
let persona = ["Pepe", 123456789, "San Martín 200", 7, 2615589654, ["Juan", "Mario"], "Argentina", true];

//acceso a todos los elementos
console.log(frutas);

console.log("=============================================");

console.log(persona);

//acceso al elemento por su índice
console.log("El elemento más vendido es: " + frutas[0] + " y el que no vendemos es: " + frutas[1]);
console.log("El elemento del índice 1 es: " + frutas[1])
console.log("El elemento del índice 2 es: " + frutas[2]);
console.log("El elemento del índice 3 es: " + frutas[3]);
console.log("El elemento del índice 4 es: " + frutas[4]);

console.log("=============================================");

console.log(persona[5][1]);

// bucles=son pequeñas estructuras repetitivas de código

//for
//        inicio            límite               paso
/* for (let index = 0  ;   index < array.length  ; index++) { */
    //código para repetir siempre que sea true 
    /* const e
   /*  //la i es igual a Index */
/*     lement = array[index];
} */

//la i es igual a Index

for (let i = 0; i < 10; i++) {
    console.log("Estamos contando de cero a 9 : " + i);;
}
console.log(persona.length);


console.log("=============================================");

for (let i = 0; i < persona.length;i++) {
    console.log("Los elementos de persona son: " + persona[i])
 /*    console.log("Los elementos de persona son: ${persona[i]}") */;
}

//introducir datos en un array

let alumnos = [];
let data = prompt("Introduce un Alumno");

//función para guardar datos en un arreglo- push

if (!data){
    alert ("No se introdujo ningún dato");
} else{
    alumnos.push(data)
    alert("Ingresamos el alumno ${data} al Arreglo de Alumnos")
}
console.log(alumnos);








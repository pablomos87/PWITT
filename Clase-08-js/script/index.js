console.log ("Esto es un comentario de una sola linea")

// Palabras reservadas: dar indicaciones de tareas o funciones  al lenguaje de progrmación de JS //
/* 
var
let
for
function
if */

//Case sensitive = distingue mayúsculas y minúsculas//

// var: espacio de memoria para guardar datos //
//declaración de una variable//
var nombre; //no es obligatorio el ;// 
//asignación de una variable. "=" es un operador de asignación//

nombre = "Pepe";

//recuperar info //
console.log (nombre)

var apellido = "Pérez"; //js es flexible, pueden ser comillas simples o dobles//

console.log (nombre,apellido)

//declaramos otra variable//
provincia = "Mendoza";
console.log (provincia);

//concatenar datos//

console.log ("Mi nombre es " + nombre + " y mi apellido es " + apellido + ". Y vivo en la provincia de "+ provincia)

//templete string

console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido} y vivo en la provincia de ${provincia}`);

// con let solo puedo declarar una vez
//puedo reutilizar la variable pais pero no volver a declararla

let pais = "Argentina";

console.log(pais);

let numero = 4;

console.log("===========================================");

resultado = numero + 2;

console.log(resultado);

//constante = palabra reservada=no cambia. Deben ser asignadas en el mismo momento en que son declaradas, de forma inseparable

console.log("===========================================");

const dni = 32036421


console.log(dni);

//operadores + - * / %

let numUno = 1000;
let numDos = 5000;

resultado = numUno + numDos;
console.log("El resultado de la suma es " + resultado);

console.log("===========================================");

resultado = numDos - numUno;
console.log("El resultado de la resta es " + resultado);

console.log("===========================================");

resultado = numDos+ numUno;
console.log(resultado);

console.log("===========================================");

resultado = numDos / numUno;
console.log(resultado);

console.log("===========================================");

resultado = numDos % numUno; //resto de la división (modulo)

console.log(resultado);

console.log("===========================================");

//Booleano

let verdadero = true;
let falso = false;

console.log("===========================================");

// Operadores relaconales ==, ===, <, >, 

let edad = 19;

// condicionales: if

if (edad < 18) {
    console.log("1. No puedes comprar bebidas");
}

if (edad > 18) {
    console.log("2. Puedes comprar bebidas");
}

if (edad >= 18) {
    console.log("3. Puedes comprar bebidas");
}
if (edad <= 18) {
    console.log("4. No puedes comprar bebidas");
}

if (edad == 18) {
    console.log("5. Tenés 18 años"); 
}
if (edad === 18) {
    console.log("6. Son estrictamente iguales");    
}

console.log("===========================================");
console.log("===========================================");

let password = 123456789

if (password===123456789) {
    console.log("Podés ingresar a tu cuenta bancaria");
}

console.log("===========================================");
console.log("===========================================");

let a = 5;

console.log(a == 5); true
console.log(a != 5); false
console.log(!true); false
console.log(!false); true

console.log("===========================================");
console.log("===========================================");

//Operadores lógicos (&& , || )

//&& y lógico - todos las variables deben ser verdaderas
// || o lógico - solo una de las variables debe ser verdadero

let cliente = true;
let pagoAlDia = false;
let dia = "viernes";


if (true) {
    console.log("Hola");
}
if (false) {
    console.log("Hola");
}

if (!cliente && dia == "lunes" && pagoAlDia) {
console.log("Lo sentimos, no tenemos ninguna oferta para usted hoy");  
}

if (cliente && dia == "lunes") {
    console.log("Por ser cliente tene un 50% de descuento por ser viernes");    
}

if (cliente && dia == "viernes") {
    console.log("Por ser cliente y ser viernes, tenemos un 70% de descuento");
}


console.log("===========================================");
console.log("===========================================");


if (!cliente || dia == "lunes" || pagoAlDia) {
    console.log("Lo sentimos, no tenemos ninguna oferta para usted hoy");  
}

if (cliente || dia == "lunes" || pagoAlDia) {
        console.log("Por ser cliente tene un 50% de descuento por ser viernes");    
}

if (cliente || dia == "viernes") {
        console.log("Por ser cliente y ser viernes, tenemos un 70% de descuento");
}

console.log("===========================================");
console.log("===========================================");

let usuario = "Pepe";
let facial = false;

if (usuario == "Pepe" && password == 123456789) {
    console.log("Binvenido a tu sistema");
    
}

if (usuario == "Pepe" || password == 123456789 || facial) {
    console.log("Binvenido a tu sistema");    
console.log("Binvenido a tu sistema") }

//elese (o si no)

if (usuario == "Pepe" && password == 12345623232 && facial) {
console.log("Binvenido a tu sistema")
} else {
console.log("Usuario o password o facial incorrectos");
}

//Alert
/* alert () */ //función modal para mandar mensajes

/* prompt() */ //función modal para introducir datos
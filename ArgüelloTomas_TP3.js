const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese el primer string y guardarlo en una variable
let string1 = prompt("Ingrese el primer string:");

// Pedir al usuario que ingrese el segundo string y guardarlo en otra variable
let string2 = prompt("Ingrese el segundo string:");

// Comparar los dos strings y guardar el resultado en una variable
let sonIguales = string1 === string2;

// Comparar la longitud de los dos strings y guardar el resultado en otra variable
let mismaLongitud = string1.length === string2.length;

// Mostrar los resultados por consola
console.log("¿Los strings son iguales?:", sonIguales);
console.log("¿Tienen la misma longitud?:", mismaLongitud);

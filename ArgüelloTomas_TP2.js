const prompt = require('prompt-sync')();

var num1 = parseInt(prompt("Ingresa el primer número: "));
var num2 = parseInt(prompt("Ingresa el segundo número: "));
var resultado = num1 + num2
console.log("Primer numero:" , num1)
console.log("Segundo numero:" , num2)
console.log("La suma de " , num1 , " y " , num2 , " es " , resultado);

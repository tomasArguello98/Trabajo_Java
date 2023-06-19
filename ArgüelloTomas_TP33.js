const prompt = require("prompt-sync")();


let respuesta;
do {
  let num1 = parseInt(prompt("Ingresa el primer número: " ));
  let num2 = parseInt(prompt("Ingresa el segundo número: "));
  let suma = num1 + num2;
  console.log(`La suma es ${suma}`);
  
  do {
    respuesta = prompt("¿Quieres repetir la operación? Ingresa SI o NO: ").toUpperCase();
  } while (respuesta !== "SI" && respuesta !== "NO");

} while (respuesta === "SI");

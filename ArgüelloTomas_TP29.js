const prompt = require("prompt-sync")();

//Define la funcion
function contarHasta() {
    let numero = parseInt(prompt("Ingresa un número positivo: "));
    let numeros = [];
    let contador = 0;
    while (contador <= numero) {
      numeros.push(contador);
      contador++;
    }
    return numeros;
  }
  
  //Muestra por consola
  console.log(contarHasta());
  
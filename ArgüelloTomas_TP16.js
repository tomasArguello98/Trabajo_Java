//Define la funcion rango
function rango(comienzo, final, sumador) {
    let resultado = [];
  
    for (let i = comienzo; i <= final; i += sumador) {
      resultado.push(i);
    }
  
    return resultado;
  }
  //Muestra los resultados por consola
  console.log(rango(1, 10, 3)); // Suma de 3 en 3
  console.log(rango(2, 8, 2)); // Suma de 2 en 2
  console.log(rango(0, 20, 5)); // Suma de 5 en 5

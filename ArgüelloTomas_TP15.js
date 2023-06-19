//Define la funcion divisibles
function divisibles(arr, divisor) {
    let resultados = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divisor === 0) {
        resultados.push(arr[i]);
      }
    }
  
    return resultados;
  }
  
  // Muestra los resultados por consola
  console.log(divisibles([1, 2, 3, 4, 5, 6], 3)); // Guarda unos numeros en una lista y dice cuales son los divisibles por 3
  console.log(divisibles([1, 2, 3, 4, 5, 6], 6)); // Guarda unos numeros en una lista y dice cuales son los divisibles por 6
  
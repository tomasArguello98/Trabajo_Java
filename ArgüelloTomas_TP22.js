//Define la funcion
function moveZeros(arr) {
    var nonZeros = [];
    var zeros = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        nonZeros.push(arr[i]);
      } else {
        zeros.push(arr[i]);
      }
    }
    return nonZeros.concat(zeros);
  }
  
  // Muestra por consola
  var resultado1 = moveZeros([false,1,0,1,2,0,1,3,"a"]);
  console.log(resultado1); // Salida: [false,1,1,2,1,3,"a",0,0]
  
  var resultado2 = moveZeros([1,2,0,1,0,1,0,3,0,1]);
  console.log(resultado2); // Salida: [1,2,1,1,3,1,0,0,0,0]
  
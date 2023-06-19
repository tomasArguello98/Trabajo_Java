//Define la funcion 
function nuevoArreglo(num) {
    var arr = [];  // Creamos un nuevo arreglo vacío
    for (var i = 0; i < num; i++) {  // Iteramos el número de veces especificado
      arr.push(i);  // Agregamos el índice actual al arreglo
    }
    return arr;  // Devolvemos el arreglo completo
  }
  
 
  var arreglo = nuevoArreglo(10);
  console.log(arreglo);  // Salida: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
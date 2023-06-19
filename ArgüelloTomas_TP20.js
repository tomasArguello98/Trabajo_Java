//Define la funcion
function sumattion(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Ejemplo de uso
  var resultado1 = sumattion(3);
  console.log(resultado1); // Salida: 6
  
  var resultado2 = sumattion(5);
  console.log(resultado2); // Salida: 15
  
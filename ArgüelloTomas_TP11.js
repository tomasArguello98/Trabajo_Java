// Define la función de operadores logicos
function operadoresLogicos(num1, num2, num3) {
    if (num1 > num2 && num1 > num3 && num1 > 0) {
      return "Número 5 es mayor y positivo";
    } else if (num1 === 0 || num2 === 0 || num3 === 0) {
      return "Error";
    } else if (num1 < 0 || num2 < 0 || num3 < 0) {
      return "Hay negativos";
    } else if (num3 > num1 && num3 > num2) {
      return num3 + 1;
    } else {
      return false;
    }
  }
  
  // Llamar a la función con argumentos
  console.log(operadoresLogicos(5, 0, 0)); // debería imprimir "Número 5 es mayor y positivo"
  console.log(operadoresLogicos(-2, 6, 4)); // debería imprimir "Hay negativos"
  console.log(operadoresLogicos(3, 1, 7)); // debería imprimir 8
  console.log(operadoresLogicos(2, 2, 2)); // debería imprimir false
  console.log(operadoresLogicos(0, 2, 5)); // debería imprimir "Error"

  
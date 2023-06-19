//Define la funcion fizzBuzz
function fizzBuzz(word1, word2, num1, num2, max) {
    for (let i = 1; i <= max; i++) {
      if (i % num1 === 0 && i % num2 === 0) {
        console.log(word1 + word2);
      } else if (i % num1 === 0) {
        console.log(word1);
      } else if (i % num2 === 0) {
        console.log(word2);
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz('Plata', 'Forma', 2, 7, 17);
  // Output esperado: 
  // 1
  // Plata
  // 3
  // Plata
  // 5
  // Plata
  // Forma
  // Plata
  // 9
  // Plata
  // 11
  // Plata
  // 13
  // PlataForma
  // 15
  // Plata
  // Forma
  // 17
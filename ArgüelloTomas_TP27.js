//Crea una lista
let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes: "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
  ];
  

//Define una funcion
  function gananciaTotal(balances) {
    let gananciaTotal = 0;
    for (let i = 0; i < balances.length; i++) {
      gananciaTotal += balances[i].ganancia;
    }
    return gananciaTotal;
  }
  
  //Muestra por consola
  console.log(gananciaTotal(balancesUltimoSemestre)); // Output: 1538

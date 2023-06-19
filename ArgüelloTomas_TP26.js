//Crea una lista
var ecommerce = [
    { nombre: "Samsung TV", precio: 6000, articulos:10},
    { nombre: "DELL notbook", precio: 4000, articulos:30 },
    { nombre:"Auriculares Sony", precio: 1500, articulos:15},
    { nombre:"Monitor Philips", precio:12000, articulos:20},
    { nombre:"Teclado logitech", precio: 3000, articulos:5}
  ];
  
  //Define la funcion
  function totalDeArticulos(productos) {
    let secciones = {};
    for (let i = 0; i < productos.length; i++) {
      let nombre = productos[i].nombre;
      let valorTotal = productos[i].precio * productos[i].articulos;
      if (secciones[nombre] === undefined) {
        secciones[nombre] = valorTotal;
      } else {
        secciones[nombre] += valorTotal;
      }
    }
    return secciones;
  }
  
  //Muestra por consola
  console.log(totalDeArticulos(ecommerce));
  // Output esperado: {Samsung TV: 60000, DELL notbook: 120000, Auriculares Sony: 22500, Monitor Philips: 240000, Teclado logitech: 15000}
  
//Define la funcion
function pluck(arr, propName) {
    return arr.map(function(obj) {
      return obj[propName];
    });
  }
  var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]; //Guarda en una lista el producto y el precio

  //Muestra por consola
  console.log(pluck(productos, 'name')); // ['TV LCD', 'Computadora']
  console.log(pluck(productos, 'price')); // [100, 500]
    
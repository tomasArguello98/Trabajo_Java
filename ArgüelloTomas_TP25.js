//Define la funcion
function sumArray(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === num) {
        return true;
      } else if (sum < num) {
        left++;
      } else {
        right--;
      }
    }
    return false;
  }
  
    


//Muestra por consola
console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 13)); // true     2+11 suman 13
console.log(sumArray([2, 5, 7, 10, 11, 15], 20)); // true     5+15 suman 20
console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 14)); // false
console.log(sumArray([2, 5, 7, 11, 15, 20], 10)); // false

// let array = [10, 3, 2, 34, 4, 53];
// quickSort = array => {
//   if (array.length < 2) {
//     return array;
//   }
//   let pivot = array[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//   // let result = quickSort(left).concat(pivot, quickSort(right));
//   return quickSort(left).concat(pivot, quickSort(right));
// };
// console.log(quickSort(array));


let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function swap(array, i, j) {
  console.log('')
  console.log('array ', array)
  console.log(' swap i is ', i)
  console.log('swap j is ', j)
let replacement = array[i];
array[i] = array[j];
array[j] = replacement;
console.log('')
  console.log('replacement ', replacement)
  console.log('array i is ', array[i])
  console.log('array j is ', array[j])
}

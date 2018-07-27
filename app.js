let array = [10, 3, 2, 34, 4, 53];
let newArray = [];
quickSort = array => {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // let result = quickSort(left).concat(pivot, quickSort(right));
  return quickSort(left).concat(pivot, quickSort(right));
};
console.log(quickSort(array));
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function bubbleSort() {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      console.log('')
      console.log('array start', array)
      console.log('i is ' + i)
      console.log('j is ' + j)
      console.log('j + 1 ' + array[j + 1])
      console.log('array[j]' + array[j])
      console.log('array[j + 1]' + array[j + 1])
      if(array[j + 1] < array[j]) {
        debugger;
        console.log('')
        console.log('if ' + array[j + 1] + ' < ' + array[j])
        swap(array, j + 1, j)
      }
      console.log('new array', array)
    }
  }
  return array;
}
console.log(bubbleSort(array))
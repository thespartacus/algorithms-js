function reverseArrayInPlace(array) {

  for(var i = 0; i < array.length / 2; i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  console.log(array);
  return array;
}

export default reverseArrayInPlace;

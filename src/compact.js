const compact = ( array ) => {

  let newArray = [];

  for ( let value in array) {
    if (array[value] == true) {
      // if (array[value] == 1) {
      //   parseInt(array[value])
      // }
      newArray.push(array[value]);
    }
    else if (array[value] > 1) {
      newArray.push(array[value])
    }
  }
    return newArray;
}

export { compact }

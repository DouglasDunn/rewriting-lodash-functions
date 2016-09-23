const nth = ( array, n ) =>{

  if(n < 0) {
    let negative = ((n * -1) -1)
    return array[negative];
  } else if (n === undefined && array === undefined) {
    return undefined;
  } else if (n >= array.length ){
    return undefined
  } else if (n*-1 -1 >= array.length ) {
    return undefined
  }
  return array[n]
}

export { nth }

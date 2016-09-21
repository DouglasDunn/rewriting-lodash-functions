const reverse = ( arr )  => {

  if( ! (arr instanceof Array)){
    return []
  }
  let j = []


for(let i = arr.length - 1; i >= 0; i--){
  j.push(arr[i])
}


  return j
}

export {reverse}

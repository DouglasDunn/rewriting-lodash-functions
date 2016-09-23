const tail = (arr) => {
  let j = []

  for(let i = 1; i < arr.length; i++){
    j.push(arr[i])
  }
  return j
}
export{ tail }

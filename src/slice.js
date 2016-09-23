const slice = (arr, start, end) => {
  let length = arr ? arr.length : 0

  if(!length) {
    return []
  }

  if(end && typeof end != 'number') {
    start = 0
    end = length

  }
  let j = [];
  if(typeof start === 'number'  && typeof end === 'number' ) {
    for(let i = 0; i < arr.length; i++){
      if (i >= start && i <= end - 1) {
        j.push(arr[i])
      }
    }
    return j
  }
  return arr


}

export { slice }

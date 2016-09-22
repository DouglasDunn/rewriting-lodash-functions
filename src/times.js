const times = (n, func) => {
  if ( ! typeof func) {
    return []
    }
  let result = []
    for(let i = 0; i < n; i++){
      result.push(i)
      }
    return result
}


export { times }

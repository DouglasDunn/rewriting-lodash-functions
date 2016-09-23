const times = (n, func) => {
  
  let result = []
    for(let i = 0; i < n; i++){
      let val = func(i)
      result.push( val )
    }

    return result
  }

export { times }

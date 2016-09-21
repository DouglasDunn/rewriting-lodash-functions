const functionReducer = (memo, fn) =>
  memo && typeof( fn ) === 'function'

const allFunctions = functions =>
  functions.reduce( functionReducer, true )

const ensureArray = (...functions) =>
  functions.reduce( (memo, item ) => memo.concat( item ), [] )

const flowRight = (...functions) => {
  const fns = ensureArray( ...functions ).reverse()

  if( ! allFunctions( fns ) ) {
    throw new TypeError( 'Expected a Function' )
  }

  return (...args) =>
    fns.slice( 1 ).reduce(
      (memo, next) => next( memo ), fns[ 0 ]( ...args )
    )
}

export { flowRight }

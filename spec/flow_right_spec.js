import { flowRight } from '../dist/flow_right'

const add = (a, b) => a + b
const square = a => a * a

describe('flowRight', () =>{
  it( 'returns a function', () => {
    expect( typeof( flowRight([ square, add ]) )).toEqual( 'function' )
  })

  it( 'raises a TypeError when functions are not supplied', () => {
    expect( () => flowRight( 1 ) ).toThrowError( TypeError )
  })

  it( 'operates on a single function', () => {
    const testFunction = flowRight( square )

    expect( testFunction( 2 ) ).toEqual( 4 )
  })

  it( 'executes functions in array from right to left', () => {
    expect( flowRight([ square, add ])( 3, 4 ) ).toEqual( 49 )
  })

  it( 'executes functions as params from right to left', () => {
    expect( flowRight( square, add )( 3, 4 ) ).toEqual( 49 )
  })
})

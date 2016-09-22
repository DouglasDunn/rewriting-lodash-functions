import { times } from '../dist/times'

describe( 'times', () => {
  it( 'invokes a function a set amount of times and returns an array of results', () => {
    expect( times(3, toString()).toEqual( ['0', '1', '2'] ))
  })

  it( 'returns an empty array if it is not fed a function', () => {
    expect( times( 1 )).toEqual( [ ] )
  })
})

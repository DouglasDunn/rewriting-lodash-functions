import { chunk } from '../dist/chunk'

describe( 'chunk', () => {
  it( 'uses a default size of 1', () => {
    expect( chunk( [1, 2, 3] ) ).toEqual([ [1], [2], [3] ] )
  })

  it( 'returns arrays of a specfic size', () => {
    expect( chunk( [1, 2, 3, 4], 2 ) ).toEqual( [ [1,2], [3,4] ] )
  })

  it( 'returns arrays of a specified size with remaining elements', () => {
    expect( chunk( [1, 2, 3], 2) ).toEqual( [ [1,2], [3] ] )
  })
})

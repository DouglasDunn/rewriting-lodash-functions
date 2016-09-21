import{reverse} from '../dist/reverse'

describe('reverse', () => {
  it( 'takes an array and prints the items in reverse order', () => {
    expect( reverse( [1, 2, 3 ,4])).toEqual([4, 3, 2, 1]) 
  })
})

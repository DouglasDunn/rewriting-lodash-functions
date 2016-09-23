import{nth} from '../dist/nth'

describe( 'nth', () => {

    it( 'if n is a negative, the nth element from the end is returned', () => {
      expect( nth([1,2,3], -2)).toEqual(2)
    })

    it( 'if n is a positive, the nth element from the begining is returned', () =>{
      expect( nth([ 1, 2, 3 ], 2)).toEqual(3)
    })

    it( 'if array is undefined and n is undefined returns undefined', () => {
      expect( nth( )).toEqual(undefined)
    })

    it( 'if n is positive or (n*-1) -1 is greater than the length of the array returns undefined', () => {
      expect( nth([1, 2], 3)).toEqual(undefined)
    })

})





// it( 'returns undefined if argument one is a empty string or empty array', () => {
//   expect( nth( [] )).toEqual(undefined)
// })
//
// it( 'if input n is a positive or negative integer longer than the length of the argument it will return undefined', () => {
//   expect( nth([1,2,3], 6)).toEqual(undefined)
// })
//
// it( 'if input n is not an integer it will return Error', () => {
//     expect( nth([1,2,3], 'z' )).toThrowError( ReferenceError )
// })
//
// it( 'if no n integer is supplied the first element of the string or array is returned', () => {
//   expect( nth([1,2,3])).toEqual(1)
// })
//

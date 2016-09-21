	import {isFunction} from '..dist/isFunction'

		describe( 'isFunction', () => {
  			it( 'returns true if value is classified as a function object', () => {
   			 expect( isFunction(_.add)).toEqual( true )
 		 })
  			  it( 'returns false if value is not classified as a function object', () => {
    			expect( isFunction( 2 ) ).toEqual( false )
  })
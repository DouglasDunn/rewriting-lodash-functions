import { isFunction } from '../dist/isFunction'

const add = (a, b) => a + b

fdescribe( 'isFunction', () => {
  it( 'returns true if value is classified as a function object', () => {
		expect( isFunction(add) ).toEqual( true )
	})
  it( 'returns false if value is not classified as a function object', () => {
		expect( isFunction( 2 ) ).toEqual( false )
	})
})

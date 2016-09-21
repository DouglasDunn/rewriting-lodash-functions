import {add} from '../dist/add'

describe("add", () => {

	it('adds two numbers together', () => {

		expect( add( 1, 2 ) ).toEqual( 3 )
	})

	it('should return undefined if no arguments entered', ()=> {

		expect( add() ).toEqual( NaN )
	})
})



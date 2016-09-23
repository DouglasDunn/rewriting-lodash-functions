import { tail } from '../dist/tail'

fdescribe( 'tail', () =>{
    it( 'Retrieves all but the first element of an array', () =>{
      expect(tail([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5])
    })
    it( 'Gets all but the first element of an array', () => {
      expect(tail([5, 5, 4, 4])).toEqual([5, 4, 4])
    })
})

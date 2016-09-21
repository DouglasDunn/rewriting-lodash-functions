import{last} from '../dist/last'

describe('last', () =>{
  it('This function returns the last element of the array', () =>{
    expect(last([1,2,3,4,5])).toEqual(5)
  })
  it('This test will express what returns from an empty array', () =>{
    expect(last([])).toEqual(undefined)
  })
  it('This test will express what returns from no input', () =>{
    expect(last()).toEqual(false)
  })
})

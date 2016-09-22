import { slice } from '../dist/slice'

fdescribe('slice', () =>{
  it('Returns empty array if no argruments are given', () =>{
    expect(slice()).toEqual([])
  })
  it('Returns whole array from pre-determined startpoint', () =>{
    expect(slice('Hello World', 0)).toEqual('Hello World')
  })
  it('Returns a piece of an array based on established start and end', () =>{
    expect(slice('Hello World', 2, 6)).toEqual(['l', 'l', 'o', ' '])
  })
})

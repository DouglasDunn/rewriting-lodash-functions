import { subtract } from '../dist/subtract'

describe( 'subtract', () => {
  it('subtracts two numbers', () => {
    expect( subtract(3,2) ).toEqual(1)
  })
  it('returns NaN if input is null or undefined', () => {
    expect( subtract( '' ) ).toEqual(NaN)
  })
})

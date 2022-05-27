// eslint-disable-next-line camelcase
import { fibonacci_memoized } from '../../../src/problems/dynamic-programming/fibonacci'

describe('fibonacci', function() {
  it('should test fibonacci', function() {
    // expect(fibonacci(50)).to.equal(20365011074);
    console.log(fibonacci_memoized(50))
  })
})

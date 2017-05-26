import assert from 'assert'
import { Car } from './Car'

describe('Car', () => {
  describe(".model", () => {
    const model = new Car().model
    it('should be sane', () => {
      assert.equal(true, !false)
    })
    it('should have a default string', () => {
      assert.equal(model, '?model?')
    })
  })
})

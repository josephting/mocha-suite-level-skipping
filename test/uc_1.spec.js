const chai = require('chai')
const expect = chai.expect

describe('User Case 1', function() {
  describe('Use Case 1a', function() {
    it('should do addition maths correctly', function() {
      expect(1+1).to.equal(2)
    })

    it('should do subtraction maths correctly', function() {
      expect(2-1).to.equal(0)
    })

    it('should do multiplication maths correctly', function() {
      expect(2*3).to.equal(6)
    })

    it('should do division maths correctly', function() {
      expect(8/2).to.equal(4)
    })
  })

  describe('Use Case 1b', function() {
    it('should do OP multiplication maths correctly', function() {
      expect(20181102*161235).to.equal(3253899980970)
    })

    it('should do OP division maths correctly', function() {
      expect(20181102/161235).to.equal(125.165764257140199)
    })
  })
})

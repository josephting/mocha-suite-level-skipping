const chai = require('chai')
const expect = chai.expect

describe('Use Case 3', function() {
  it('should return value of type string', function() {
    expect(typeof ''.substring(0)).to.equal('string')
  })
})

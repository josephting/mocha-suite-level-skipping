const chai = require('chai')
const expect = chai.expect

describe('Use Case 2', function() {
  it('should return number type value', function() {
    expect(typeof ([]).length).to.equal('number')
  })

  it('should return 0', function() {
    expect(([]).length).to.equal(1)
  })

  it('should return 3', function() {
    expect(([1,true,'foo']).length).to.equal(3)
  })
})

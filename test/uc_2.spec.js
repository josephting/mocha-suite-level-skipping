const chai = require('chai')
const expect = chai.expect

describe('Use Case 2', function() {
  it('should eval undefined type to undefined', function() {
    expect(typeof a).to.equal('undefined')
  })

  it('should eval null type to object', function() {
    expect(typeof null).to.equal('object')
  })

  it('should eval boolean type to boolean', function() {
    expect(typeof true).to.equal('aboolean')
  })

  it('should eval number type to number', function() {
    expect(typeof 1).to.equal('number')
  })

  it('should eval string type to string', function() {
    expect(typeof 'a').to.equal('string')
  })
  
  it('should eval array type to object', function() {
    expect(typeof {}).to.equal('object')
  })

  it('should eval function type to function', function() {
    expect(typeof function() {}).to.equal('function')
  })
})

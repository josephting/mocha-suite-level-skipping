let caseInSuiteFailed = false
let previousSuite = null

beforeEach(function(done) {
  if (previousSuite === null || (this.currentTest.file === previousSuite.file)) {
    if (caseInSuiteFailed) {
      this.skip()
    }
  } else if (this.currentTest.file !== previousSuite.file) {
    caseInSuiteFailed = false
  }
  done()
})

afterEach(function(done) {
  if (this.currentTest.state !== 'passed') {
    caseInSuiteFailed = true
    previousSuite = {
      file: this.currentTest.file
    }
  }
  done()
})

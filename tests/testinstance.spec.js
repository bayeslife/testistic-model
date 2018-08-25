import Testistic from '../src/index.js'

import { assert } from 'chai'

describe('Given a Testistic Core', function () {

  var testrun = null
  testrun = Testistic.TestRun.create(1/* success */, 'G-W-T', 'git://testsource', 'http://localhost:8080')
  var testresult = null
  testresult = Testistic.TestResult.create('success')

  describe('When create a TestResult', function () {
    it('Then there is a test result', function () {
      assert(testresult.status)
    })
  })

  describe('When create a TestRun', function () {
    it('Then there is a test instance', function () {
      assert(testrun)
    })
    it('Then there is a test start datetime', function () {
      assert(testrun.startdate)
    })
    it('Then there is a test end datetime', function () {
      assert(testrun.enddate)
    })
    it('Then there is a test source', function () {
      assert(testrun.source)
    })
    it('Then testresult can be set', function () {
      testrun.setTestResult(testresult)
      assert(testrun.getTestResult())
    })
  })
})

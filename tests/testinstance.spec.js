import Testistic from '../src/index.js'

import { assert } from 'chai'

describe('Given valid TestRun', function () {

  var testrun = null
  testrun = Testistic.TestRun.createFrom({
    status: 1/* success */,
    description: 'G-W-T',
    project: 'a project',
    epic: 'a epic',
    source: 'git://testsource',
    target: 'http://localhost:8080'
  })

  describe('When create a TestRun', function () {
    it('Then there is a test instance', function () {
      assert(testrun)
    })
    it('Then there is a project', function () {
      assert(testrun.project)
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
    it('Then there is a test status', function () {
      assert(testrun.status)
    })
  })
})

describe('Given an invalid TestRun', function () {

  var testrun = null
  testrun = Testistic.TestRun.createFrom({
  })
  var errors = Testistic.TestRun.validate(testrun)
  describe('When create a TestResult', function () {
    it('Then there is a test status validation error', function () {
      assert(errors.includes('Status is required'))
    })
    it('Then there is a epic validation error', function () {
      assert(errors.includes('Epic is required'))
    })
  })
})

import Testistic from '../src/index.js'

import { assert } from 'chai'

// Project
describe('Given valid project', function () {
  var project = null
  project = Testistic.Project.createFrom({
    name: 'project1',
    url: 'http:/example.com'
  })

  describe('When create a project', function () {
    it('Then there is a project', function () {
      assert(project)
    })
    it('Then there is an name', function () {
      assert(project.name)
    })
    it('Then there is a url', function () {
      assert(project.url)
    })
    it('Then the test run is has no validation errors', function () {
      var errors = Testistic.Project.validate(project)
      assert(errors.length === 0)
    })
  })
})

describe('Given an invalid project', function () {
  var project = Testistic.Project.createFrom({
  })
  var errors = Testistic.Project.validate(project)
  it('Then there is a project name validation error', function () {
    assert(errors.includes('Name is required'))
  })
  it('Then there is a url validation error', function () {
    assert(errors.includes('URL is required'))
  })
})

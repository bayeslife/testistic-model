import config from './Config.js'

import uuid from 'uuid/v1'

function validate (entity) {
  var errors = []
  if (!entity.status) {
    errors.push('Status is required')
  }
  if (!entity.startdate) {
    errors.push('Start date is required')
  }
  if (!entity.source) {
    errors.push('Source is required')
  }
  if (!entity.target) {
    errors.push('Target is required')
  }
  if (!entity.epic) {
    errors.push('Epic is required')
  }
  return errors
}

function createFromTemplate () {
  return createFrom({
    status: 1,
    epic: 'epic',
    source: 'source',
    target: 'target'
  })
}

function createFrom (entity) {
  return create(entity.status, entity.description, entity.epic, entity.source, entity.target, entity.startdate, entity.enddate)
}

function create (teststatus, testdescription, testepic, testsource, testtarget, teststartdate, testenddate) {
  return {
    id: uuid(),
    description: testdescription,
    status: teststatus,
    epic: testepic,
    startdate: teststartdate || Date.now(),
    enddate: testenddate || Date.now(),
    source: testsource,
    target: testtarget,
    setTestResult: function (testresult) {
      this.testresult = testresult
    },
    getTestResult: function () {
      return this.testresult
    }
  }
}

export default {
  create, createFrom, createFromTemplate, validate
}
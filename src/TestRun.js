import uuid from 'uuid/v1'

function validate (entity) {
  var errors = []
  if (entity.status == null || entity.status === undefined) {
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
  if (!entity.project) {
    errors.push('Project is required')
  }
  return errors
}

function createFromTemplate () {
  return createFrom({
    status: 1,
    project: 'project1',
    epic: 'epic',
    source: 'source',
    target: 'target'
  })
}

function createFrom (entity) {
  return create(entity.status, entity.description, entity.project, entity.epic, entity.source, entity.target, entity.startdate, entity.enddate)
}

function create (teststatus, testdescription, testproject, testepic, testsource, testtarget, teststartdate, testenddate) {
  return {
    id: uuid(),
    description: testdescription,
    status: teststatus,
    epic: testepic,
    project: testproject,
    startdate: teststartdate || Date.now(),
    enddate: testenddate || Date.now(),
    source: testsource,
    target: testtarget,
    project: testproject
    // setTestResult: function (testresult) {
    //   this.testresult = testresult
    // },
    // getTestResult: function () {
    //   return this.testresult
    // }
  }
}

export default {
  create, createFrom, createFromTemplate, validate
}

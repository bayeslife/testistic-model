import config from './Config.js'
import uuid from 'uuid/v1'

function validate (entity) {
  var errors = []
  if (!entity.name) {
    errors.push('Name is required')
  }
  if (!entity.url) {
    errors.push('Url is required')
  }
  return errors
}

function createFromTemplate () {
  return createFrom({
    name: 'project',
    url: 'http://example.com'
  })
}

function createFrom (entity) {
  return create(entity.name, entity.url)
}

function create (name, url) {
  return {
    name: name,
    url: url
  }
}

export default {
  create, createFrom, createFromTemplate, validate
}

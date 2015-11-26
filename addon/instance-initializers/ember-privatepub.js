import Ember from "ember";

function lookupFactory(app, name) {
  if (app.resolveRegistration) {
    return app.resolveRegistration(name);
  }
  return app.container.lookupFactory(name);
}

export function initialize(instance) {
  let config     = lookupFactory(instance, 'config:environment');
  var userPrefix = (config.PrivatePub || {}).userPrefix;

  if (Ember.isPresent(userPrefix)) {
    instance.lookup('service:privatePub').set('userPrefix', userPrefix);
  }
}

export default {
  name: 'ember-cli-privatepub',
  initialize: initialize
};

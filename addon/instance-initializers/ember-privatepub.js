import Ember from "ember";

export function initialize(instance) {
  var config     = instance.container.lookupFactory('config:environment');
  var userPrefix = (config.PrivatePub || {}).userPrefix;

  if (Ember.isPresent(userPrefix)) {
    instance.container.lookup('service:privatePub').set('userPrefix', userPrefix);
  }
}

export default {
  name: 'ember-cli-privatepub',
  initialize: initialize
};

import Ember from 'ember';
import { initialize } from '../../../initializers/privatepub';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | privatepub', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// TODO: how to test injections in UNIT tests
test('it works', function(assert) {
  initialize(registry, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

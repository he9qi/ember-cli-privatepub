import { moduleFor, test } from 'ember-qunit';

moduleFor('service:private-pub', 'Unit | Service | private pub', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it has prefix', function(assert) {
  var service = this.subject();
  assert.equal(service.userPrefix, 'user');
});

import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    Ember.Logger.debug('init');
    Ember.Logger.debug(this.get('privatePub'));
  }
});

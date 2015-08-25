/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-privatepub',

  included: function(app, parentAddon) {
    this._super.included(app);

    var target = (parentAddon || app);

    target.import('vendor/privatepub.js');
  }
};

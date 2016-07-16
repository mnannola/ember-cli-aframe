/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-aframe',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/aframe/dist/aframe.js');
  }
};

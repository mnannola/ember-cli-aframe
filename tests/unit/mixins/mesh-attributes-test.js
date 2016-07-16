import Ember from 'ember';
import MeshAttributesMixin from 'ember-cli-aframe/mixins/mesh-attributes';
import { module, test } from 'qunit';

module('Unit | Mixin | mesh attributes');

// Replace this with your real tests.
test('it works', function(assert) {
  let MeshAttributesObject = Ember.Object.extend(MeshAttributesMixin);
  let subject = MeshAttributesObject.create();
  assert.ok(subject);
});

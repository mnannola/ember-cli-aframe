import Ember from 'ember';
import layout from '../templates/components/ember-a-entity';

export default Ember.Component.extend({
  layout,
  tagName: 'a-entity',
  position: null,
  rotation: null,
  scale: null,
  attributeBindings: ['position', 'rotation', 'scale']
});

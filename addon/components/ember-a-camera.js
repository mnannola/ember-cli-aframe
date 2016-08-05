import Ember from 'ember';
import EmberAEntity from './ember-a-entity';
import layout from '../templates/components/ember-a-camera';

export default EmberAEntity.extend({
  tagName: 'a-camera',
  layout,
  far: null,
  fov: null,
  'look-controls-enabled': null,
  near: null,
  'wasd-controls-enabled': null,
  attributeBindings: ['far', 'fov', 'look-controls-enabled', 'near', 'wasd-controls-enabled']

});

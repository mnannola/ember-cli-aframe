import layout from '../templates/components/ember-a-light';
import EmberAEntity from './ember-a-entity';
import MeshAttributes from '../mixins/mesh-attributes';

export default EmberAEntity.extend(MeshAttributes, {
  tagName: 'a-light',
  layout,
  angle: null,
  decay: null,
  distance: null,
  exponent: null,
  'ground-color': null,
  intensity: null,
  type: 'directional',
  attributeBindings: ['angle', 'decay', 'distance', 'exponent', 'ground-color', 'intensity', 'type']
});

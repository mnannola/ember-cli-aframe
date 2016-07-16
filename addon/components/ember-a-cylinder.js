import layout from '../templates/components/ember-a-cylinder';
import EmberAEntity from './ember-a-entity';
import MeshAttributes from '../mixins/mesh-attributes';

export default EmberAEntity.extend(MeshAttributes, {
  tagName: 'a-cylinder',
  layout,
  radius: null,
  height: null,
  attributeBindings: ['radius', 'height']
});

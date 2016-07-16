import layout from '../templates/components/ember-a-sphere';
import EmberAEntity from './ember-a-entity';
import MeshAttributes from '../mixins/mesh-attributes';

export default EmberAEntity.extend(MeshAttributes, {
  tagName: 'a-sphere',
  layout,
  attributeBindings: ['radius'],
  radius: null
});

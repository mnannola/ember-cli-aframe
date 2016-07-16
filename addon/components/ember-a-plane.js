import layout from '../templates/components/ember-a-plane';
import EmberAEntity from './ember-a-entity';
import MeshAttributes from '../mixins/mesh-attributes';

export default EmberAEntity.extend(MeshAttributes, {
  tagName: 'a-plane',
  layout,
  width: null,
  height: null,
  attributeBindings: ['width', 'height']
});

import layout from '../templates/components/ember-a-box';
import EmberAEntity from './ember-a-entity';
import MeshAttributes from '../mixins/mesh-attributes';

export default EmberAEntity.extend(MeshAttributes, {
  tagName: 'a-box',
  layout,
  width: null,
  height: null,
  depth: null,
  attributeBindings: ['width', 'height', 'depth']
});

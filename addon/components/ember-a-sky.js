import layout from '../templates/components/ember-a-sky';
import EmberAEntity from './ember-a-entity';
import MeshAttributes from '../mixins/mesh-attributes';

export default EmberAEntity.extend(MeshAttributes, {
  layout,
  tagName: 'a-sky'
});

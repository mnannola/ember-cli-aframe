import layout from '../templates/components/ember-a-scene';
import EmberAEntity from './ember-a-entity';

export default EmberAEntity.extend({
  tagName: 'a-scene',
  layout,
  canvas: null,
  attributeBindings: ['canvas']
});

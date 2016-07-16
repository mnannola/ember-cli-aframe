import Ember from 'ember';

export default Ember.Mixin.create({
  color: null,
  metalness: null,
  opacity: null,
  roughness: null,
  shader: null,
  src: null,
  translate: null,
  transparent: null,
  attributeBindings: ['color', 'metalness', 'opacity', 'roughness', 'shader', 'src', 'translate', 'transparent']
});

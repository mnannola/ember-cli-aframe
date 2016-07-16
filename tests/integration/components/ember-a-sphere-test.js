import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-a-sphere', 'Integration | Component | ember a sphere', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-a-sphere}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-a-sphere}}
      template block text
    {{/ember-a-sphere}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

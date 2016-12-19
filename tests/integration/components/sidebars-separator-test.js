import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sidebars-separator', 'Integration | Component | sidebars separator', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sidebars-separator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sidebars-separator}}
      template block text
    {{/sidebars-separator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

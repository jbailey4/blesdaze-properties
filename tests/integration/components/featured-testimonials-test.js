import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('featured-testimonials', 'Integration | Component | featured testimonials', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{featured-testimonials}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#featured-testimonials}}
      template block text
    {{/featured-testimonials}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

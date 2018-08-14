import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.query('home', { type: 'featured' }).then((featuredHomes) => {
      this.get('controller').set('featuredHome', featuredHomes.get('firstObject'));
    });
  }
});

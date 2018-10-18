import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // fetches the featured home to display on the home page
    this.store.query('home', { type: 'featured' }).then((featuredHomes) => {
      this.get('controller').set('featuredHome', featuredHomes.get('firstObject'));
    });
  }
});

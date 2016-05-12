import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['ui', 'fluid', 'card', 'house-item'],

  hasPhotos: computed({
    get() {
      return this.get('home.photos.length') > 0;
    }
  })
});

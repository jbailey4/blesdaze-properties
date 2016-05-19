import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['ui', 'fluid', 'card', 'house-item'],

  hasPhotos: computed({
    get() {
      return this.get('home.photos.length') > 0;
    }
  }),

  shouldShowImageArrows: computed('hasPhotos', {
    get() {
      console.log('should show arrows...');
      return this.get('hasPhotos') && this.get('home.photos.length') > 1;
    }
  })
});

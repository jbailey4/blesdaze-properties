import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

const { alias } = computed;

export default Controller.extend({
  featuredHome: null,
  featuredHomePhoto: computed('featuredHome', {
    get() {
      return this.get('featuredHome.photos.firstObject');
    }
  })
});

import Controller from '@ember/controller';
import { computed } from '@ember/object';

const { alias } = computed;

export default Controller.extend({
  featuredHome: null,
  featuredHomePhoto: computed('featuredHome', {
    get() {
      return this.get('featuredHome.photos.firstObject');
    }
  })
});

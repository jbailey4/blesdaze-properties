import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  featuredHome: null,
  featuredHomePhoto: computed('featuredHome', {
    get() {
      return this.get('featuredHome.photos.firstObject');
    }
  })
});

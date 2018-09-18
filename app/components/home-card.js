import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ui', 'fluid', 'card', 'house-item'],

  hasPhotos: computed({
    get() {
      return this.get('home.photos.length') > 0;
    }
  }),

  // TODO - first photo could be a photo other than the first image in the image set
  firstPhoto: computed({
    get() {
      return this.get('home.photos.firstObject');
    }
  }),

  actions: {
    previewImages() {
      if (this.get('hasPhotos')) {
        let photoModalTitle = `${this.get('home.street')} ${this.get('home.city')}, ${this.get('home.state')} ${this.get('home.zip')}`;
        let photos = this.get('home.photos').map(p => p.thumbnailLargeSecureUrl);

        return this.previewImages(photos, photoModalTitle);
      }
    }
  }
});

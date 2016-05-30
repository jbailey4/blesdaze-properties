import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  listingTypes: ['All', 'Rent', 'For Sale'],
  listingTypeSelection: 'All',

  previewPhotos: null,
  previewPhotosTitle: null,

  hasNoHomes: computed('model.length', {
    get() {
      if (this.get('model.length') === 0) {
        return true;
      } else {
        return false;
      }
    }
  }),

  actions: {
    listTypeSelectionChange(component, id, value) {
      this.set('listingTypeSelection', value);
    },

    sendHomeMessage() {
      console.log(this);
    },

    showImages(images, title) {
      this.set('cacheScrollY', window.scrollY);
      window.scroll(0, 0);

      this.setProperties({
        previewPhotos: images,
        previewPhotosTitle: title
      });

      Ember.run.later(() => {
        $('.ui.preview-images.modal').modal('show');
      }, 100);
    },

    previewImagesClosed() {
      window.scroll(0, this.get('cacheScrollY'));
    }
  }
});

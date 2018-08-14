import { later } from '@ember/runloop';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

const { filter } = computed;

export default Controller.extend({
  queryParams: ['listingTypeSelection'],
  listingTypes: ['All', 'Rent', 'For Sale'],
  listingTypeSelection: 'All',

  previewPhotos: null,
  previewPhotosTitle: null,

  filteredHomes: computed('listingTypeSelection', function() {
    const type = this.get('listingTypeSelection');

    let homes = this.get('model');

    if (type === 'All') {
      return homes;
    } else {
      return homes.filter(home => {
        return home.get('listingType') === type;
      });
    }
  }),

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

      later(() => {
        $('.ui.preview-images.modal').modal('show');
      }, 100);
    },

    previewImagesClosed() {
      window.scroll(0, this.get('cacheScrollY'));
    }
  }
});

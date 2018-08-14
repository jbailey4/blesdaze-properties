import Component from '@ember/component';
import { computed } from '@ember/object';
import { A as emberArray } from '@ember/array';

const { service } = inject;

export default Component.extend({
  session: service(),

  // file upload params as per dropzonejs
  url: 'api/home/photo',
  paramName: 'homePhoto',
  acceptedFiles: '.jpg,.jpeg,.png',
  autoProcessQueue: false,
  parallelUploads: 10,
  addRemoveLinks: true,
  defaultMessage: 'Click or drag and drop here to upload images of this home',

  shouldDisableButton: computed('selectedPhotoCount', {
    set(key, value) {
      return value;
    },

    get(key) {
      if (!this.get('selectedPhotoCount') || this.get('selectedPhotoCount') === 0) {
        return true;
      } else {
        return false;
      }
    }
  }),

  errorMessage: null,

  selectedPhotoCount: null,

  headers: computed({
    get() {
      let session = this.get('session');

      if (session.get('isAuthenticated')) {
        return {
          'Authorization': `Bearer ${session.get('data.authenticated.token')}`
        }
      }
    }
  }),

  _getDropzoneInstance() {
    // TODO  manually grabbing the dropzone instance, bc ember-cli-dropzonejs currently does not pass the dropzone instance created by the 'drop-zone' component, this should be supported upstream - PR?
    let dropzoneInstance = Dropzone.instances[0];

    return dropzoneInstance ? dropzoneInstance : null;
  },

  didReceiveAttrs() {
    console.log('recieved attrs home-photos...', arguments);
  },

  willDestroyElement() {
    let dropzone = this._getDropzoneInstance();
    if (dropzone) {
      dropzone.destroy();
    }
  },

  actions: {
    // file upload actions as per dropzonejs
    addedfile(file) {
      this.incrementProperty('selectedPhotoCount');
    },

    removedfile(file) {
      this.decrementProperty('selectedPhotoCount');
      if (this.get('selectedPhotoCount') === 0) this.set('selectedPhotoCount', null);
    },

    uploadPhotos() {
      let dropzoneInstance = this._getDropzoneInstance();

      if (dropzoneInstance) {
        this.set('shouldDisableButton', true);
        dropzoneInstance.processQueue();
      }
    },

    sending(event, xhr, formData) {
      if (this.get('home')) {
        formData.append('homeId', this.get('home.id'));
      } else {
        // TODO handle edge cases where the photo uploader is active before saving a home
        return;
      }

    },

    queuecomplete() {
      this.set('shouldDisableButton', false);
      this.set('selectedPhotoCount', null);
    },

    error(file, message) {
      this.set('errorMessage', message);
    },

    /**
      Removes the photo from the list of home photos

      @param photo the photo to remove
    */
    removePhoto(photo) {
      let photos = emberArray(this.get('home.photos'));
      photos.removeObject(photo);
    }
  }
});

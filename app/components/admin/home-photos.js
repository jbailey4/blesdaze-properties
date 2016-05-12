import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

const { service } = inject;

export default Component.extend({
  session: service(),

  // file upload params as per dropzonejs
  url: 'http://localhost:1337/api/home/photo',
  paramName: 'homePhoto',
  acceptedFiles: '.jpg,.jpeg,.png',
  autoProcessQueue: false,
  addRemoveLinks: true,
  defaultMessage: 'Click or drag and drop here to upload images of this home',

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

  actions: {
    // file upload actions as per dropzonejs
    addedfile(file) {
      console.log(`added a home photo: ${file}`);
    },

    uploadPhotos() {
      let dropzoneInstance = this._getDropzoneInstance();

      if (dropzoneInstance) {
        dropzoneInstance.processQueue();
      }
    },

    sending(event, xhr, formData) {
      console.log(this);
      console.log(this.get('home'));
      if (this.get('home')) {
        console.log('adding home id to photo POST request');
        formData.append('homeId', this.get('home.id'));
      } else {
        // TODO handle edge cases where the photo uploader is active before saving a home
        return;
      }

    }
  }
});

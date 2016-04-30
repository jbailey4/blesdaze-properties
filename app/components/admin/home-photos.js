import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  // file upload params as per dropzonejs
  url: 'http://localhost:1337/api/home/photo',
  paramName: 'homePhoto',
  acceptedFiles: '.jpg,.jpeg,.png',
  autoProcessQueue: false,
  addRemoveLinks: true,
  defaultMessage: 'Click or drag and drop here to upload images of this home',

  // TEST ONLY REMOVE!!!
  homeId: '57009efd057868959dc59025',

  _getDropzoneInstance() {
    // TODO  manually grabbing the dropzone instance, bc ember-cli-dropzonejs currently does not pass the dropzone instance created by the 'drop-zone' component, this should be supported upstream - PR?
    let dropzoneInstance = Dropzone.instances[0];

    return dropzoneInstance ? dropzoneInstance : null;
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
      console.log('adding home id to photo POST request');
      formData.append('homeId', this.get('homeId'));
    }
  }
});

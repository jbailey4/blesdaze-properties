import Ember from 'ember';

const {
  RSVP,
  Component,
  inject
} = Ember;

const { service } = inject;

export default Component.extend({
  session: service(),

  classNames: ['home-photo', 'column'],

  actions: {
    deletePhoto() {
      const photo = this.get('photo');
      const session = this.get('session');

      let self = this;

      return new RSVP.Promise((resolve, reject) => {
        Ember.$.ajax(`api/home/photo/${photo.id}`, {
          method: 'DELETE',
          beforeSend(xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${session.get('data.authenticated.token')}`);
          },

          success() {
            self.attrs.remove(photo);
            return resolve(arguments);
          },

          error(err) {
            return reject(err);
          }
        });
      });

    }
  }
});

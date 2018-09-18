import $ from 'jquery';
import RSVP from 'rsvp';
import Component from '@ember/component';
import { inject } from "@ember/service";

export default Component.extend({
  session: inject(),

  classNames: ['home-photo', 'column'],

  actions: {
    deletePhoto() {
      const photo = this.get('photo');
      const session = this.get('session');

      let self = this;

      return new RSVP.Promise((resolve, reject) => {
        $.ajax(`api/home/photo/${photo.id}`, {
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

import Component from '@ember/component';
import { inject } from "@ember/service";

export default Component.extend({
  session: inject(),

  classNames: ['home-photo', 'column'],

  actions: {
    deletePhoto() {
      const photo = this.get('photo');
      const session = this.get('session');

      const token = session.get('data.authenticated.token');

      return new Promise((resolve, reject) => {
        fetch(`api/home/photo/${photo.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: token
          }
        })
        .then((response) => response.json())
        .then((data) => {
          this.remove(photo);

          resolve(data)
        })
        .catch(reject)
      });
    }
  }
});

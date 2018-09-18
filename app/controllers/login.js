import Controller from '@ember/controller';
import { inject } from "@ember/service";

export default Controller.extend({
  session: inject(),

  identification: null,
  password: null,

  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).then(() => {
        this.set('loginError', null);
      }).catch((err) => {
        this.set('loginError', err.error);
      });
    }
  }
});

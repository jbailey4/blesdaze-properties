import Ember from 'ember';

const {
  Controller,
  inject
} = Ember;

const { service } = inject;

export default Controller.extend({
  session: service(),

  identification: null,
  password: null,

  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials);
    }
  }
});

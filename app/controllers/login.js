import Controller from '@ember/controller';

const { service } = inject;

export default Controller.extend({
  session: service(),

  identification: null,
  password: null,

  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).then(() => {
        this.set('loginError', null);
      }).catch((err) => {
        console.log(err);
        this.set('loginError', err.error);
      });
    }
  }
});

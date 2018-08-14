import Controller from '@ember/controller';

const { service } = inject;

export default Controller.extend({
  session: service('session')
});

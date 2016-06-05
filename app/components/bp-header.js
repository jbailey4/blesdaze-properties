import Ember from 'ember';

const {
  Component,
  inject
} = Ember;

const { service } = inject;

export default Component.extend({
  session: service('session'),

  actions: {
    toggleMobileNav() {
      Ember.$('body').toggleClass('show-menu');
    }
  }
});

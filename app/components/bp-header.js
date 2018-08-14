import $ from 'jquery';
import Component from '@ember/component';

const { service } = inject;

export default Component.extend({
  session: service('session'),

  actions: {
    toggleMobileNav() {
      $('body').toggleClass('show-menu');
    }
  }
});

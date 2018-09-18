import $ from 'jquery';
import Component from '@ember/component';
import { inject } from "@ember/service";

export default Component.extend({
  session: inject('session'),

  actions: {
    toggleMobileNav() {
      $('body').toggleClass('show-menu');
    }
  }
});

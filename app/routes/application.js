import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const {
  Route,
  get,
  inject
 } = Ember;

const { service } = inject;

export default Route.extend(ApplicationRouteMixin, {
  session: service('session'),

  /*
    NOTE: Temporary until site content is restructured by business owner

    allow the logged in admins to see the public site, otherwise the splash page is shown
  */
  beforeModel(transition) {
    if (!get(this, 'session.isAuthenticated') && transition.targetName !== 'login') {
      this.transitionTo('splash');
    }
  }
});

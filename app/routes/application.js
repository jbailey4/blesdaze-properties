import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const {
  Route,
  get,
  inject
 } = Ember;

const { service } = inject;

export default Route.extend(ApplicationRouteMixin);

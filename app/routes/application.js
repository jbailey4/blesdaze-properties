import Route from '@ember/routing/route';
import { get } from '@ember/object';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = inject;

export default Route.extend(ApplicationRouteMixin);

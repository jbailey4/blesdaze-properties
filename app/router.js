import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('homes');
  this.route('services');
  this.route('about-us');
  this.route('messages', { path: '/contact-us' });

  adminRouter(this);
  this.route('login');
  this.route('splash');
});

export default Router;

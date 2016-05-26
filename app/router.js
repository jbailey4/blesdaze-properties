import Ember from 'ember';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('homes');
  this.route('services');
  this.route('about-us');
  this.route('messages', { path: '/contact-us' });

  adminRouter(this);
  this.route('login');
});

export default Router;

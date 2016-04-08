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
  this.route('contact-us');

  adminRouter(this);
});

export default Router;

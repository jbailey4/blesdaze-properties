import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('homes');
  this.route('services');
  this.route('about-us');
  this.route('contact-us');
});

export default Router;

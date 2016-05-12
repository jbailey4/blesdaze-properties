import Ember from 'ember';

const {
  Component,
  run,
  RSVP
} = Ember;

const {
  later,
  cancel
 } = run;

const ACTIVE_CLASS = 'animate';
const INTERVAL_TIME = '2000'; // ms

export default Component.extend({
  testimonials: [],

  /**
    cache for the current cycle timer

    @property cycleTimer
    @private
  */
  cycleTimer: null,

  /**
    When invoked starts the timer which shows/hides each testimonial element

    @method cycle
    @private
  */
  cycle() {
    let cycleTimer = later(this, function() {
      this.hideCurrentElement().then(() => {
        return this.showNextElement();
      })
    }, INTERVAL_TIME);

    this.set('cycleTimer', cycleTimer);
  },

  hideCurrentElement() {
    
  },

  getTestimonials() {
    return this.$().find('.featured-testimonial');
  },

  didInsertElement() {
    let _testimonials = this.getTestimonials();

    if (_testimonials.length > 0) {
      this.set('testimonials', _testimonials);
      this.startCycle();
    }
  },

  willDestroyElement() {
    cancel(this.get('cycleTimer'));
  }
});

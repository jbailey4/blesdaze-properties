import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$().find('#home-street').focus();
  },

  activeTab: 'general',

  listTypes: [
    'Rent',
    'For Sale'
  ],

  _canAdvance() {
    return !(this.get('home.isNew'));
  },

  saveHome(callback) {
    console.log('saving home...', this);
    let homePromise = this.get('model').save();

    callback(homePromise);

    homePromise.then(() => {
      console.log('saved home...', arguments);
      this.set('_canAdvance', true);
    }).catch(() => {
      console.log('saved home failed', arguments);
    });
  },

  actions: {
    updatedListingType(component, id, value) {
      this.set('model.listingType', value);
    },

    switchTab(tab) {
      const canAdvance = this._canAdvance();

      if (tab !== 'general' && !canAdvance) {
        return;
      }

      this.set('activeTab', tab);
    }
  }
});

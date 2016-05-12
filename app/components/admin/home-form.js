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

  /**
    Stores the most recent saved home to pass to additional steps in the home creation process

    @property savedHome
    @public
  */
  savedHome: null,

  _canAdvance() {
    return !(this.get('home.isNew'));
  },

  saveHome(callback) {
    console.log(this.get('model'));
    let homePromise = this.get('model').save();

    callback(homePromise);

    homePromise.then((home) => {
      console.log('saved home...', home);
      this.set('savedHome', home);
      console.log(this);
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

import Component from '@ember/component';

export default Component.extend({
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
      // this.store.push({
      //   data: {
      //     id: home.get('id'),
      //     type: 'home',
      //     attributes: home.toJSON()
      //   }
      // });
    }).catch((err) => {
      console.log('saved home failed', err);
    });
  },

  actions: {
    updatedListingType(component, id, value) {
      this.set('home.listingType', value);
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

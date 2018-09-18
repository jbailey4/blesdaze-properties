import Component from '@ember/component';
import { set } from "@ember/object";

export default Component.extend({
  init() {
    this._super(...arguments);

    set(this, 'listTypes', [
      'Rent',
      'For Sale'
    ]);
  },

  didInsertElement() {
    this.$().find('#home-street').focus();
  },

  activeTab: 'general',

  listTypes: null,

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
    let homePromise = this.get('model').save();

    callback(homePromise);

    homePromise.then((home) => {
      this.set('savedHome', home);
      // this.store.push({
      //   data: {
      //     id: home.get('id'),
      //     type: 'home',
      //     attributes: home.toJSON()
      //   }
      // });
    }).catch((err) => {
      console.log('saved home failed', err); // eslint-disable-line no-console
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

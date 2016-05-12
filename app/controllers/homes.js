import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  listingTypes: ['All', 'Rent', 'For Sale'],
  listingTypeSelection: 'All',

  hasNoHomes: computed('model.length', {
    get() {
      if (this.get('model.length') === 0) {
        return true;
      } else {
        return false;
      }
    }
  }),

  actions: {
    listTypeSelectionChange(component, id, value) {
      this.set('listingTypeSelection', value);
    }
  }
});

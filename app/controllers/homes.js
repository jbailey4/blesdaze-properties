import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  listingTypes: ['All', 'Rent', 'For Sale'],
  listingTypeSelection: 'All',

  actions: {
    listTypeSelectionChange(component, id, value) {
      this.set('listingTypeSelection', value);
    }
  }
});

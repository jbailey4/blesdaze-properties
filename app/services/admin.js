import EmberAdminService from 'ember-admin/services/admin';
import { set } from "@ember/object";

export default EmberAdminService.extend({
  namespace: '',
  include: null,

  init() {
    this._super(...arguments);

    set(this, 'include', [ 'home' ]);
  },

  // excludedColumns: {
  //   'home': [
  //     'features',
  //     'flooring',
  //     'schools',
  //     'zip',
  //     'directions',
  //     'areasOfInterest'
  //   ]
  // }
});

import EmberAdminService from 'ember-admin/services/admin';

export default EmberAdminService.extend({
  namespace: '',
  include: ['home'],

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

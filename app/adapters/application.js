import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { RESTAdapter } = DS;

export default RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  namespace: 'api'
});

import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

const { RESTAdapter } = DS;

/**
  Application Adapter
*/
export default RESTAdapter.extend(DataAdapterMixin, AdapterFetch, {
  authorizer: 'authorizer:token',
  namespace: 'api'
});

import DS from 'ember-data';

const { RESTAdapter } = DS;

export default RESTAdapter.extend({
  host: 'http://localhost:1337',
  namespace: 'api'
});

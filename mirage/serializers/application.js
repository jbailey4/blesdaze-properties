import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
  serialize(response, request) {
    const { queryParams = {} } = request;
    let json = RestSerializer.prototype.serialize.apply(this, arguments);

    const { homes } = json;

    if (queryParams.type === 'featured') {
      json.homes = homes.filter(({ isFeatured }) => isFeatured);

      return json;
    } else {
      return json;
    }
  }
});
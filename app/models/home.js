import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  street: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string'),

  listingType: attr('string'),
  price: attr('string'),
  beds: attr('string'),
  baths: attr('string'),

  features: attr('string'),
  flooring: attr('string'),
  petPolicy: attr('string'),
  schools: attr('string'),
  leaseTerms: attr('string'),
  availabilityDate: attr('string'),
  directions: attr('string'),
  areasOfInterest: attr('string'),

  isFeatured: attr('boolean'),

  photos: attr()
});

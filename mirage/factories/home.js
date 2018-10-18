import { Factory, faker } from 'ember-cli-mirage';

const { address, lorem } = faker;

export default Factory.extend({
  street() { return address.streetAddress() },
  city() { return address.city() },
  state() { return address.state() },
  zip() { return address.zipCode() },

  listingType: faker.list.random('All', 'Rent', 'For Sale'),
  
  price() { return faker.commerce.price() },
  beds() { return faker.random.number({min: 1, max: 7 })},
  baths() { return faker.random.number({ min: 1, max: 3 }) },
  availabilityDate() { return faker.date.future() },
  
  features() { return lorem.sentences(6) },
  flooring() { return lorem.sentences(1) },
  petPolicy() { return lorem.sentences(1) },
  schools() { return lorem.word() },
  leaseTerms() { return lorem.sentence(5) },
  directions() { return lorem.sentences() },
  areasOfInterest() { return lorem.sentences() },

  isFeatured: false,

  photos: null
});

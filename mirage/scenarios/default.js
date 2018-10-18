export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('home', 10);

  server.create('home', { isFeatured: true });
}

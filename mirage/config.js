import { Response } from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/homes');

  this.post('/auth', () => {
    let responseBody = {
      "user": { 
        "email":"foo@bp.com",
        "createdAt":"2016-06-02T11:14:05.094Z",
        "updatedAt":"2016-06-02T11:14:05.094Z",
        "id":"1"
      },
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3NTAxNGZkYjY1NDhmYzQ2OWIxODcyNyIsImlhdCI6MTUzOTk3MDcwMSwiZXhwIjoxNTM5OTc3OTAxfQ.f0T1UBrK6v1-mG-Nt0jpKX5LyS3MTw938dE1h0QcOFE"
    }

    return new Response('200', {}, responseBody);
  });

  if (window.Cypress) {
    window.mirage = this;
  }
}

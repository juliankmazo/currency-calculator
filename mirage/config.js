export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
// this.namespace = 'api';

this.get('/currencies', () => {
    return {
      currencies: [
        {id: 1, code: 'CAD', name: "Canadian Dollar", rate: 1.29},
        {id: 2, code: 'EUR', name: "Euro", rate: 0.88},
        {id: 3, code: 'AUD', name: "Australian Dollar", rate: 1.31},
        {id: 4, code: 'COP', name: "Colombian Peso", rate: 2888.77},
        {id: 5, code: 'CUP', name: "Cuban Peso", rate: 1.3},
        {id: 6, code: 'CNY', name: "Yuan Renminbi", rate: 6.65},
        {id: 7, code: 'CLP', name: "Chilean Peso", rate: 668.75},
        {id: 8, code: 'JPY', name: "Japanese Yen", rate: 100.30},
        {id: 9, code: 'GBP', name: "Pound Sterling", rate: 0.76},
        {id: 10, code: 'BRL', name: "Brazilian Real", rate: 3.20},
        {id: 11, code: 'USD', name: "US Dollar", rate: 1},
        
      ]
    };
  });
}

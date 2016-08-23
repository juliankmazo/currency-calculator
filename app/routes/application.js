import Ember from 'ember';
const { Route, RSVP } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      currencies: this.store.findAll('currency').then((currencies) => {
        return currencies.sortBy('name');
      }),
      baseCurrency: this.store.findRecord('currency', 11),
    });
  }
});

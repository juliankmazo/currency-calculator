import Ember from 'ember';
const { Component, computed, get } = Ember;

export default Component.extend({
  total: computed('currencyToConvert', 'baseCurrency.amount', {
    get() {
      const total = get(this, 'currencyToConvert.rate')*get(this, 'baseCurrency.amount');
      return total? total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : '';
    }
  }),
});

import Ember from 'ember';
const { Component, computed, get } = Ember;

export default Component.extend({
  total: computed('currencyToConvert', 'totalToConvert', {
    get() {
      const total = get(this, 'currencyToConvert.rate')*get(this, 'totalToConvert');
      return total? total.toFixed(2) : '';
    }
  }),
});

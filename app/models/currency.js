import DS from 'ember-data';
import Ember from 'ember';
const { attr } = DS;
const { computed, get } = Ember;

export default DS.Model.extend({
  code: attr('string'),
  name: attr('string'),
  rate: attr('number'),
  amount: attr('number'),
  fullName: computed('code', 'name', function() {
    return `${get(this, 'name')}, ${get(this, 'code')}`;
  }),
  formatedAmount: computed('amount', function() {
    return get(this, 'amount').toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  })
});

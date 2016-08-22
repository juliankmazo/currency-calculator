import DS from 'ember-data';
import Ember from 'ember';
const { attr } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  code: attr('string'),
  name: attr('string'),
  rate: attr('number'),
  fullName: computed('code', 'name', function() {
    return `${this.get('name')}, ${this.get('code')}`;
  })
});

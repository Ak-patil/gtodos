import Component from '@ember/component';
import TableCommon from '../../mixins/table-column';
import { computed } from '@ember/object';
import Table from 'ember-light-table';


export default Component.extend({
  columns: computed(function() {
    return [{
      label: 'First Name',
      valuePath: 'firstName',
      width: '150px'
    }, {
      label: 'Last Name',
      valuePath: 'lastName',
      width: '150px'
    }, {
      label: 'Address',
      valuePath: 'address'
    }, {
      label: 'State',
      valuePath: 'state'
    }, {
      label: 'Country',
      valuePath: 'country'
    }];
  }),
  table: Ember.computed('model', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});

import EmberObject from '@ember/object';
import TableColumnMixin from 'aapp/mixins/table-column';
import { module, test } from 'qunit';

module('Unit | Mixin | table-column', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let TableColumnObject = EmberObject.extend(TableColumnMixin);
    let subject = TableColumnObject.create();
    assert.ok(subject);
  });
});

import DS from 'ember-data';
 const {attr}=DS;
export default DS.Model.extend({
    userId: attr('string'),
    title: attr('string'),
    completed:attr('boolean')

});

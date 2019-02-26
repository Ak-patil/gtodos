import DS from 'ember-data';
 const {attr}=DS;
export default DS.Model.extend({
    userId: attr('number',{defaultValue: 1}),
    title: attr('string'),
    completed:attr('boolean', {defaultValue: "not-completed"})

});

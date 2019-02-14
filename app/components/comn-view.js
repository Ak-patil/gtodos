import Component from '@ember/component';

export default Component.extend({
//  number: 'one',
//  numbersDisabled: true,
router: Ember.inject.service(),

actions: {
    saveModel(model)
    {  
        model.save().then((res) => {
            this.get('router').transitionTo('todos');
        }).catch((err) => {
            
        })


    },
  
    // savenote(todos) {
    //   todos.save()
    //   .then(() => this.transitionTo('todos'));
    // },

    // willTransition(transition) {

    //   let model = this.controller.get('model');

    //   if (model.get('hasDirtyAttributes')) {
    //     let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

    //     if (confirmation) {
    //       model.rollbackAttributes();
    //     } else {
    //       transition.abort();
    //     }
    //   }
    // }
  }
   

});
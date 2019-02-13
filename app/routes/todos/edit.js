import Route from '@ember/routing/route';

export default Route.extend({

    model(params) {
      debugger
      return this.store.findRecord('todos', params.id);
    },
  
    actions: {
  
      savenote(todos) {
        todos.save()
        .then(() => this.transitionTo('todos'));
      },
  
      willTransition(transition) {
  
        let model = this.controller.get('model');
  
        if (model.get('hasDirtyAttributes')) {
          let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
  
          if (confirmation) {
            model.rollbackAttributes();
          } else {
            transition.abort();
          }
        }
      }
    }
  });
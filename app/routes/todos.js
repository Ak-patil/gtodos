import Route from '@ember/routing/route';

export default Route.extend({
  // router: Ember.inject.service(),

  model() {
    this._super(...arguments);
    return this.store.findAll('todos');
  },
  actions:{
    deletenote(todos){
      let confirmation=confirm("Are You Sure ?");

      if(confirmation){
        todos.destroyRecord();
      }
    },

    redirect(model) {
      this.get('router').transitionTo('todos.edit', model.id);
    }
  }
});

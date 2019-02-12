import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this._super(...arguments);
    return this.store.findAll('todos');
  },
  actions:{
    deletenote(todos){
      let confirmation=confirm("Are You Sure ?");

      if(confirmation){
        todos.destroyReco0rd()
      }
    }
  }
});

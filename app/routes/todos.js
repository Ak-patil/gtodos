import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  notifications: service('toast'),
  

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
      let notifications = this.get('notifications');
        notifications.success('Your Note Sucessfully Deleted');
    },
    

    redirect(model) {
      this.get('router').transitionTo('todos.edit', model.id);
      let notifications = this.get('notifications');
        notifications.info('Edit Your Todo');
    }
  }
});


import Component from '@ember/component';
import { inject } from '@ember/service';
import { empty } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
     isDisabled:empty('item.title'),
     notifications: service('toast'),

router:inject(),

actions: {
    saveModel(model)
    {  
        if(!model.get('userId') || !model.get('title')) {
            return ;
        }
        model.save().then(() => {
            this.get('router').transitionTo('todos');
        }).catch(() => {
            
        })
        let notifications = this.get('notifications');
        notifications.success('success');
    },   
    willTransition() {
        // rollbackAttributes() removes the record from the store
        // if the model 'isNew'
        this.controller.get('todos').rollbackAttributes();
      }
  }
});


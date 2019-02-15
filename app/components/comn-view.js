import Component from '@ember/component';
import { inject } from '@ember/service';
export default Component.extend({

router:inject(),

actions: {
    saveModel(model)
    {  
        model.save().then(() => {
            this.get('router').transitionTo('todos');
        }).catch(() => {
            
        })
    },   
  }
});
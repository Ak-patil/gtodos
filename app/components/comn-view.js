import Component from '@ember/component';
import { inject } from '@ember/service';
// import { match,not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';
import { empty } from '@ember/object/computed';
export default Component.extend({
    // userId: '',
    // title:'',
    // isValidId:match('item.userId', /^[0-9]*$/),
    // chk: not('isValidId'),
    isUserId:empty('item.userId'),
    // isUserId:empty('item.userId'),
    isTitleLength:gte('item.title.length',  5),
    isDisabled :Ember.computed.and('isTitleLength', 'isUserId'),
   
router:inject(),

actions: {
    saveModel(model)
    {  
        if(!model.get('userId') || !model.get('title')) {
            console.log("required field error");
            return ;
        }
        model.save().then(() => {
            this.get('router').transitionTo('todos');
        }).catch(() => {
            
        })
    },   
    willTransition() {
        // rollbackAttributes() removes the record from the store
        // if the model 'isNew'
        this.controller.get('todos').rollbackAttributes();
      }
  }
});
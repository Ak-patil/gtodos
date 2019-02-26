import Controller from '@ember/controller';
// import EmberValidations from 'ember-validations';

export default Controller.extend({
    // validations:{
    //     "model.userId":{
    //         presence:true,
    //     },
    //     "model.title":{
    //         presence:true,
    //         length:{minimum:5,maximum:100}
    //     }
    // },
    // actions: {
    //     saveModel(model)
    //     {  
    //         if(!model.get('userId') || !model.get('title')) {
    //             return ;
    //         }
    //         this.validate().then(()=>{
    //             model.save().then(() => {
    //                 this.get('router').transitionTo('todos');
    //             })
    //         }).catch(()=>{
    //             console.log("Errors")
    //         })
           
    //         let notifications = this.get('notifications');
    //         notifications.success('success');
    //     }
    //   }
});

import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
        return this.store.createRecord('todos');
    },
    
    actions:
    {
        // checked(){
        //     debugger
        // },
        //  this.set('snbr', value)

        // colorChanged(choice){
        //     debugger
        //     console.log("changing flavour choice",choice);
        //     this.controller.set('flavor',choice);
        //  },

        createnote(model)
        {  
            model.save().then((res) => {
                this.get('router').transitionTo('todos');
            }).catch((err) => {
                
            })


        }
       
    }
});


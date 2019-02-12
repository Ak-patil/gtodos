import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
        return this.store.createRecord('create');
    },
    actions:
    {
        createnote(model)
        {
            // const userId=this.get('userId');
            // const title=this.get('title');
            // // const completed=this.get('completed');

            // const newcreate= this.store.createRecord('create',{userId,title});

            // newcreate.save().then(response=>{
            //     this.set('userId', '');
            // });  
            model.save()
            .then((res) => {
                debugger
            }).catch((err) => {
                debugger
            })


        }
       
    }

});


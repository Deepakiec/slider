var TaskModel = Backbone.Model.extend({
        defaults: {
            name: 'Fetus',
            age: 0,
            child: ''
        },
        initialize: function(){
            console.log("model.js>>>initialize");
        }
		
    });

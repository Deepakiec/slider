	
var TaskView = Backbone.View.extend({
	el:'#container',

	initialize:function(){
	console.log('TaskView.js>>>>initialize');
	var model=new TaskModel();
	var model=new TaskCollection();
	
	
	this.render();
	},
	
	
	PostComment:function(e){debugger;
	
	var currentId=e.currentTarget.id;
	console.log($('textarea').val());
	},
	
	updatelumpsum:function(){
	
	$('#amountfetch').text($('#lumpsumEnter').val());
	},
	
	
	
	
	render:function(){
	var template = _.template($("#sliders").html());
           
            this.$el.html( template );
			console.log(this.$el.html(template));
			
			

var $sliders = $(".slider").slider({
    value: 0,
    min: 0,
  max: 100,
slide: function(e, ui) {
	console.log(ui.value);
	
	var maxSum = parseInt($('#amountfetch').text());
        var sum = 0;
		
		
        $(".slider").not(this).each(function() {
            sum += $(this).slider("value");
        });

       $(".slider").slider("option", "max", maxSum);
        
        sum += ui.value;

        if (sum > maxSum) e.preventDefault();
		
        else $(this).next().html("<p><span>AmountInvested:["+ui.value+"]</span><span> And AmountPercent:["+ui.value*100/maxSum+"%]</span></p>" );
    }
	
	
	
    
});
		
	
	
	},
events: {
            "click #sb_btn": "PostComment",
			'click #update':'updatelumpsum'
			
			
        }
	
	});
    max: 1000,
    step: 10,
	slide: function(e, ui) {
	var maxSum = 1000;
        var sum = 0;
		var current=e.currentTarget;
		
        $(".slider").not(this).each(function() {
            sum += $(this).slider("value");
        });

       
        sum += ui.value;

        if (sum > maxSum) e.preventDefault();
        else $(this).next().html("Value: " + ui.value);
    }
    
});
		
	
	
	},
events: {
            "click #sb_btn": "PostComment"
			
			
        }
	
	});

define(function(require,exports,module){
    var index_content1 = require("view/index_main_top.html");
    var index_content2 = require("view/index_main_center.html");
    var Index = {
    	https: function(){
    		$.ajax({
		    	type:'get',
		    	url:'json/index_main.json',
		    	success:function(res){
					var data = res.data;
					var data1 = res['limited_buy_main'];
					var data2 = res['brand_choice'];
					var data3 = res['today_find'];
					var flag = 0;
					$('#limited_buy').html( _.template(index_content2)({obj1:data1,obj2:data2,obj3:data3}));
					$('#cloths_content').html( _.template(index_content1)({obj:data,'flag1':flag}));
					var $choiceNode = $('.index_main_cloths .cloths_title');
					var $choice = $('a',$choiceNode);
					$choice.on('click',function(e){
						e.preventDefault();
						$(this).addClass('active').siblings().removeClass('active');
						flag = $(this).index();
						$('#cloths_content').html( _.template(index_content1)({obj:data,'flag1':flag}));
					});
		    	}
		    });
    	}

  	}
    
    module.exports = Index;
})

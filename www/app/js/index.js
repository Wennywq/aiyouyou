define(function(require,exports,module){
	// var $ = require('../bower_components/jquery/dist/jquery');
	var underscore = require('../bower_components/underscore/underscore.js');
	var SlideImg = require('js/runImg.js');
	var Pop =require('js/pop.js');
	var _nav = require('../view/index_nav.html');
	var _header = require("../view/header.html");
	var _footer = require("../view/footer.html");
	$("#header").html( _.template(_header));
	$("#footer").html( _.template(_footer));
	var Task = {
		initFn:function(){
			this.runImg();
			this.templateNav();
			this.pop1();
		},
		runImg:function(){
			new SlideImg({
				imgList:['image/web-101-101-1.jpg','image/web-101-101-2.jpg','image/web-101-101-3.jpg'],
				node:$('div.index_banner'),
				time:2000
			})
		},
		templateNav:function(){
			$.ajax({
				url: 'json/nav.json',
				success:(function(rev){
					var innerHtml = (_.template(_nav)({obj:rev.indexNav}));
					$('#index_banner_menu').html(innerHtml);
				})
			})
		},
		pop1:function(){
				new Pop({wrap:$('div.down_load')});
				new Pop({wrap:$('.footer_list_right .pc')});
				new Pop({wrap:$('.footer_list_right .wechat')});
		}
	}
	module.exports = Task;
	
})
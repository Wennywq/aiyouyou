define(function(require,exports,module){
	var SlideImg = require("js/runImg.js");
	var _nav = require('../view/index_nav.html');
	var _list = require("../view/list_main_content.html");
	var _header = require("../view/header.html");
	var _footer = require("../view/footer.html");
	$("#header").html( _.template(_header));
	$("#footer").html( _.template(_footer));
	
	$.ajax({
		url:"json/list_main.json",
		success:function(res){
		   var data = res.data;
		   //console.log(data);
           $("#list_main_content").html( _.template( _list )({obj:data}));
		}
	})
	var List = {
		initFn:function(){
			this.runImg();
			this.templateNav();
		},
		runImg:function(){
			new SlideImg({
				imgList:["image/web-101-101-5.jpg","image/web-101-101-4.jpg","image/web-101-101-3.jpg"],
				node:$('div.list_banner'),
				time:2000
			})
		},
		templateNav:function(){
			$.ajax({
				url: 'json/nav.json',
				success:(function(rev){
					var innerHtml = (_.template( _nav)({obj:rev.listNav}));
					$('#list_banner_menu').html(innerHtml);
				})
			})
		}
	}
	module.exports = List;
});
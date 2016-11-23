define(function(require,exports,module){
	var header = require("../view/header.html");
	var footer = require("../view/footer.html");
	var headerjs = require("../js/header.js");
	var list = require("../view/list.html");

	var List = {
		initPage: function(){
			this.showView();
			this.filterFn();
		},
		showView: function(){
			
			var headerFn = _.template( header );
			$('#header').html( headerFn() );
			headerjs.initPage();

			var footerFn = _.template( footer );
			$('#footer').html( footerFn() );

			var listFn = _.template( list );
			
			$.ajax({
				url:'static/json/list.json',
				type:'GET',
				success: function(res){
					var productArr = res.product;
					$('#listbox').html( listFn({productArr:productArr}) );
				}
			})
		},
		filterFn: function(){
			$('body').on('click','.filter-nav li a',function(){
				$(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
			})
			$('body').on('click','.showallbtn a',function(){
				$('.otherkind').slideToggle();
				$('.show1').toggle();
				$('.show2').toggle();
			})

		}
	}
	module.exports = List;
})
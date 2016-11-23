define(function(require,exports,module){
	var header = require('../view/header.html');
	var footer = require('../view/footer.html');
	var headerjs = require('../js/header.js');
	var home = require('../view/home.html');

	var Index = {
		initPage: function(){
			this.showView();
			this.showQuickNav();
			this.catFn();
			this.slideFn();
		},
		showView: function(){
			var headerFn = _.template( header );
			$('#header').html( headerFn() );
			headerjs.initPage();

			var footerFn = _.template( footer );
			$('#footer').html( footerFn() );

			var homeFn = _.template( home );
		
			$.ajax({
				url:"static/json/home.json",
				type:"GET",
				success: function(res){
					var bannerArr = res.banner;
					var listArr = res.item_list;
					var weekArr = res.item_week;
					var contentArr = res.item_content;
					$('#main-box').html( homeFn({bannerArr:bannerArr,listArr:listArr,weekArr:weekArr,contentArr:contentArr}) );
					$('.item').hover(function(e){
						$(this).find('.pop').stop(true,true).fadeIn();
					},function(e){
						$(this).find('.pop').stop(true,true).fadeOut();
					});
				}
			})
		},
		showQuickNav: function(){
			var quicknav = require('../view/quicknav.html');
			var quicknavFn = _.template( quicknav );
			$('#quick-nav').html( quicknavFn() );
		},
		catFn: function(){
			$('body').on('mouseover','.cat-left-item',function(){
				$('.cat-right').show();
				$(this).addClass('active').siblings().removeClass('active');
				$('.cat-right-item').eq($(this).index()).show().siblings().hide();
			}).on('mouseout','.cat-left-item',function(){
				$(this).removeClass('active');
				$('.cat-right-item').hide();
			})
			$('body').on('mouseover','.cat-right-item',function(){
				$('.cat-left-item').eq($(this).index()).addClass('active').siblings().removeClass('active');
				$(this).show();
			}).on('mouseout','.cat-right-item',function(){
				$('.cat-left-item').removeClass('active');
				$(this).hide();
			})
		},
		slideFn: function(){
			var showIndex = 2;
			var timer = setInterval(function(){
				$('.banner-list>li').eq(showIndex).fadeIn(200).siblings().fadeOut(200);
				$('.banner-point span').eq(showIndex).addClass('active').siblings().removeClass('active');
				if(showIndex > 2){
					showIndex = 0;
					$('.banner-list>li').eq(0).fadeIn(200).siblings().fadeOut(200);
					$('.banner-point span').eq(0).addClass('active').siblings().removeClass('active');
				}
				showIndex++;
			},2000);
			
			$('body').on('click','.banner-point span',function(){
				clearInterval(timer);
				$('.banner-list>li').eq($(this).index()).fadeIn(100).siblings().fadeOut(100);
				$('.banner-point span').eq($(this).index()).addClass('active').siblings().removeClass('active');
				showIndex = $(this).index();

				timer = setInterval(function(){
					$('.banner-list>li').eq(showIndex).fadeIn(100).siblings().fadeOut(100);
					$('.banner-point span').eq(showIndex).addClass('active').siblings().removeClass('active');
					if(showIndex > 2){
						showIndex = 0;
						$('.banner-list>li').eq(0).fadeIn(100).siblings().fadeOut(100);
						$('.banner-point span').eq(0).addClass('active').siblings().removeClass('active');
					}
					showIndex++;
				},2000);
			})
		}	
	}
	module.exports = Index;
});
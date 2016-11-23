//轮播图组件 time:轮转时间 
//node:外层包裹的容器 
//imgList:需要轮播的图片地址数组 
//.runImg 组件外层
//.runImg_box 组件内部容器
//.flag 轮播下方的标记
define(function(require,exports,module){
	var jquery = require('../bower_components/jquery/dist/jquery.js');
	require('js/runImg.css');
	var SlideImg = function(obj){
		$.extend(true,this.default,obj);
		this.imgList = this.default.imgList;
		this.time = this.default.time;
		this.node = this.default.node;
		this.appendNode();
		this.init();
	}
	//默认
	SlideImg.prototype.default = {
		//轮播时间
		time : 1000,
		//轮播图片数组
		imgList : [],
		//轮播图节点的外层节点
		node :$('body')
	} 
	//制造和插入节点
	SlideImg.prototype.appendNode = function(){
		var imgList = this.imgList;
		var node = this.node;
		var li_html = '<div class="runImg"><ul class="runImg_box">';
		var flag_html = '<ul class="flag">';
		for(var i = 0;i<imgList.length;i++){
			li_html+='<li><img src='+imgList[i]+' alt="img"></li>';
			if (i==0){
				flag_html+='<li class="active"></li>';
				continue;
			}
			flag_html+='<li></li>';
			if (i==imgList.length-1) {
				li_html+='<li><img src='+imgList[0]+' alt="img"></li>';
			}
		}
		li_html+='</ul>';
		flag_html+='</ul></div>';
		node.append(li_html+flag_html);
		var nodeWidth = node.css('width');
		$('img',node).css('width',nodeWidth);
		$('.runImg_box').css({'width': (parseInt(nodeWidth)*(imgList.length+1)+'px')});
		$('.flag').find('li').css({'width': (1/imgList.length*80+'%'),'margin':('0px '+1/imgList.length*10+'%')});
		$(window).resize(function(){
			nodeWidth = node.css('width');
			$('img',node).css('width',nodeWidth);
			$('.runImg_box').css({'width': (parseInt(nodeWidth)*(imgList.length+1)+'px')});
			$('.flag').find('li').css({'width': (1/imgList.length*80+'%'),'margin':('0px '+1/imgList.length*10+'%')});
		})
	}

	//轮播图转动
	SlideImg.prototype.init = function(){
		var imgList = this.imgList;
		var node = this.node;
		var $runImg_box = $('.runImg_box',node);
		var imgNode = $('img',node);
		var flag = $('.flag li',node);
		var current = 0;
		var time = this.time;
		var timer = setInterval(run,time);
		function run(){
			$runImg_box.animate({'left':-(current+1)*parseFloat(imgNode.width())+'px'});
			current=(current+1)%(imgList.length);
			if(current==0){
				$runImg_box.animate({'left':'0px'},0);
			}
			flag.eq(current).addClass('active').siblings().removeClass('active');
		} 
		$('.flag').on('mouseenter','li',function(e){
			var e = e||window.event;
			var index = $(e.currentTarget).index();
			clearInterval(timer);
			current = index
			$runImg_box.css({'left':-current*parseFloat(imgNode.width())+'px'});
			flag.eq(current).addClass('active').siblings().removeClass('active');
		});
		$('.flag').on('mouseleave','li',function(e){
			timer = setInterval(run,time);
		});
	}
	module.exports = SlideImg;


})
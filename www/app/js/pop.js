//pop插件
define(function(require,exports,module){
	var jquery = require('../bower_components/jquery/dist/jquery.js');
	var Pop = function(obj){
		this.wrap = obj.wrap;
		this.onclick();
	}
	Pop.prototype.onclick = function(){
		var that = this;
		var wrap = this.wrap;
		var full = this.full;
		wrap.on('click',function(e){
				var e = e||window.event;
				e.stopPropagation();
				full(that);
			});
			$('body').on('click',function(){
				$('.fullNode').remove();
		})
	}
	Pop.prototype.full = function(that){
		var wrap = that.wrap;
		var img = wrap.find('img').clone();
		var fullNode = $("<div class='fullNode'></div>");
		$('body').append(fullNode);
		var popNode = $('div.fullNode');
		popNode.append(img);
		var clientWidth = $(window).width();
		var clientHeight = $(window).height();
		popNode.css({'width':clientWidth+'px','height':clientHeight+'px','background':'rgba(0,0,0,0.5)','position':'fixed','zIndex':'66','top':'0'});
		popNode.find('img').css({'width':'30%','marginLeft':'35%','paddingTop':'3%'});
	}

	module.exports = Pop;
})
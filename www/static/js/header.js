define(function(require,exports,module){
	var Header = {
		initPage: function(){
			this.hoverFn();
		},
		hoverFn: function(){
			$('.start-city').hover(function(){
				$('.city-sel').show();
			},function(){
				$('.city-sel').hide();
			});

			$('.city-sel p').click(function(){
				var val = $(this).html();
				$('.hit span').html(val);
				$('.city-sel').hide();
			});

		}
	}
	module.exports = Header;
})
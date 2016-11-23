define(function(require,exports,module){
	var Reg = {
		initPage: function(){
			this.showView();
			this.checkboxFn();
		},
		showView: function(){
			var reg = require("static/view/reg.html");
			var regFn = _.template( reg );
			$('#reg').html( regFn() );
		},
		checkboxFn: function(){
			var flag = false;
			$('body').on('click','.dealcheckbox',function(){
				flag =! flag;
				if(flag){
					$(this).find('.checkbox').addClass('on');
				}else{
					$(this).find('.checkbox').removeClass('on');
				}
			});


			$('body').on('click','.qtzh',function(){
				$('.other-login').slideToggle();
			})

			$('body').on('click','.login-btn',function(){
				$('.login-warn').show();
			})
		}
	}
	module.exports = Reg;
})
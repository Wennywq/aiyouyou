define(function(require,exports,module){
	var Login = {
		initPage: function(){
			this.showView();
			this.checkboxFn();
		},
		showView: function(){
			var login = require("static/view/login.html");
			var loginFn = _.template( login );
			$('#login').html( loginFn() );
		},
		checkboxFn: function(){
			var flag = false;
			$('body').on('click','.option-left',function(){
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
	module.exports = Login;
})
define(function(require,exports,module){
	var header = require("../view/header.html");
	var headerjs = require("../js/header.js");

	var Detail = {
		initPage: function(){
			this.showView();
		},
		showView: function(){
			
			var headerFn = _.template( header );
			$('#header').html( headerFn() );
			headerjs.initPage();

			var footer = require("../view/footer.html");
			var footerFn = _.template( footer );
			$('#footer').html( footerFn() );

			var quicknav = require("../view/quicknav.html");
			var quicknavFn = _.template( quicknav );
			$('#quick-nav').html( quicknavFn() );

			var detail = require("../view/detail.html");
			var detailFn = _.template( detail );
			$('#detailbox').html( detailFn() );
		}
	}

	module.exports = Detail;
})
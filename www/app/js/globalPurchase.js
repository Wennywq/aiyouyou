define(function(require,exports,module){
	var _global = require("../view/global_pur_main.html");
	var _header = require("../view/header.html");
	var _footer = require("../view/footer.html");
	$("#header").html( _.template(_header));
	$("#footer").html( _.template(_footer));
	var Go = {
	    http:function(){
	    	$.ajax({
				url:"json/global_pur_main.json",
				success:function(res){
					var data = res.data;
					console.log(data);
		            $("#global_pur_content").html( _.template(_global)({obj:data}) );
				}
			})
	    }
	}
	module.exports = Go;
});
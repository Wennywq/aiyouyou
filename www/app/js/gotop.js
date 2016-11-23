define(function(require, exports, module) {
    var jquery = require('../bower_components/jquery/dist/jquery.js');
    require('js/gotop.css');

    var Gotop = function(obj) {
        $.extend(true, this.default, obj);
        this.node = this.default.node;
        this.appendNode();
        this.onclick();
    }
    Gotop.prototype.default = {
        node: $('html')
    }
    Gotop.prototype.appendNode = function() {
        var node = this.node;
        var divEle = "<div id='gotop'>返回顶部</div>";
        if ($(window).scrollTop() > 200) {
            node.append(divEle);
        }
    }
    Gotop.prototype.onclick = function() {
        var node = this.node;
        $("#gotop").click(function() {
            if (node.scrollTop()) {
                node.animate({ scrollTop: 0 }, 1000);
                return false;
            }
            $('body').animate({ scrollTop: 0 }, 1000);
            return false;
        })

    }


    module.exports = Gotop;
})

define(function(require, exports, module) {
    var _header = require("../view/header.html");
    var _footer = require("../view/footer.html");
    $("#header").html(_.template(_header));
    $("#footer").html(_.template(_footer));

    var goods_detail = {
        initPage: function() {
            this.jqzoom();
            this.buy_num();
            this.fixed_nav();
            this.gotop();
        },
        //放大镜插件使用
        jqzoom: function() {
            $("#select_img li a").click(function(e) {
                e.preventDefault();
                //增加点击的li的class:tb-selected，去掉其他的tb-selecte
                $(this).parents("li").addClass("active").siblings().removeClass("active");
                //赋值属性
                $(".jqzoom").attr('src', $(this).find("img").attr("mid"));
                $(".jqzoom").attr('rel', $(this).find("img").attr("big"));
            });
            $('#choose_color a').click(function(e) {
                e.preventDefault();
                $(this).addClass('active').siblings().removeClass('active');
            });
            $('#choose_size a').click(function(e) {
                e.preventDefault();
                $(this).addClass('active').siblings().removeClass('active');
            });
        },
        buy_num: function() {
            var $buy_num = $('#buy_num').val();
            $('.btn_add').click(function() {
                $buy_num++;
                $('#buy_num').val($buy_num);
                if ($buy_num >= 99) {
                    alert('sorry,已是库存最大量!');
                }
            });
            $('.btn_minus').click(function() {
                $buy_num--;
                $('#buy_num').val($buy_num);
                if ($buy_num < 1) {
                    alert('单笔每人次最少购买' + $buy_num);
                    return;
                }
            })
        },
        fixed_nav: function() {
            var $floor_top = $("#goods_nav").offset().top +150;
            $(window).scroll(function(){
                var $top = $(window).scrollTop();
                if( $top >= $floor_top){
                    $("#goods_nav").addClass("fixed_nav");
                }else{
                    $("#goods_nav").removeClass("fixed_nav");
                }
            });
            $('.detail_nav a').click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
        },
        gotop: function(){
            var $top = $(window).height() + 300;
            $(window).scroll(function(){
                var $scroll_top = $(window).scrollTop();
                if($scroll_top >= $top){
                   $('#gotop').fadeIn();
                }else{
                    $("#gotop").fadeOut();
                }
            })
            $("#gotop").click(function(){
                $("html,body").animate({scrollTop:0},500);
                return false;
            })
            
        }
    }
    module.exports = goods_detail;
})

define(function(require, exports, module) {
    var _header = require("../view/header.html");
    var _footer = require("../view/footer.html");
    $("#header").html(_.template(_header));
    $("#footer").html(_.template(_footer));
    require('../bower_components/jquery-lazyload/test');
    var _brand = require("../view/brand_list.html");
    var _brandFn = _.template(_brand);
    $.ajax({
        url: "../json/brand_list.json",
        success: function(res) {
            var data = res.data;
            //console.log(data);
            $("#brand_list").html(_brandFn({ obj: data }));
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
        }
    });
    $('.brand_title_right a').on('click', function(e) {
        e.preventDefault();
        //console.log($(this));
        $(this).addClass('active').siblings().removeClass('active')
    });

    //浮层    
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        var floor_top = $(".brand_box").offset().top + 200;
        if (top >= floor_top) {
            $(".fixed-top").show();
        } else {
            $(".fixed-top").hide();
        }
    });
    //浮层定位
    $(".fixed-top ul li").click(function(e) {
        e.preventDefault();
        var flag = $(this).index();
        $('.brand_title_right a').eq(flag).addClass('active').siblings().removeClass('active');
        var goTo = $('.brand_box').offset().top;
        $("html, body").animate({
            scrollTop: goTo
        }, 200);
    });

    var SlideImg = require('js/runImg.js');
    var Brand = {
        runImg: function() {
            new SlideImg({
                imgList: ['image/brand_img1.jpg', 'image/brand_img2.jpg', 'image/brand_img3.jpg', 'image/brand_img4.jpg', 'image/brand_img5.jpg'],
                node: $('div.brand_banner'),
                time: 2000
            })
        }
    }
    module.exports = Brand;
})

$(function() {
	//预加载
	$(".loading-box").hide();
})
$(window).load(function() {
	//播放/暂停音乐
	$(".music-icon").on("click", function() {
			var audio = document.getElementById('music1');
			if (audio !== null) {
				if (audio.paused) {
					audio.play();
				} else {
					audio.pause();
				}
			}
			$(this).toggleClass("rotate");
			$(this).toggleClass("music-shift");
		})	
	//打开分享
	$(".share-btn").on('click',function(){
		$(".share-mask").fadeIn(300);
	})
	//关闭分享
	$(".share-mask").on('click',function(){
		$(this).fadeOut(300);
	})
	//礼物页面礼物随机
	var gift_rand=Math.floor(Math.random()*4+1);
	$(".gift-list").attr('src','images/gift'+gift_rand+".png");
});
//小弹出框消失
function toptiphide(){
	$(".toptip").hide();
};

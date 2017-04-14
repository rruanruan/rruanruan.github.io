$(function(){
	$("html").niceScroll({
		cursoropacitymin:0.5,
		cursorwidth:6,
		cursorcolor :'#000',
		zindex:100,
		background:'rgba(0,0,0,0.3)'
	});
	if(navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)){

	}else{
		setTimeout(function(){
			skrollr.init({
				smoothScrollingDuration: 5000,
				constants: {
					valinit: function() {
						return $(window).height()/2;
					},
					secondval:function(){
						console.log($('.path2').position().top-($(window).height()/2),'path2');
						return $('.path2').position().top-($(window).height()/2);
					},
					thirdval: function() {
						console.log($('.path3').position().top -($(window).height()*0.5),'path3');
						return 	$('.path3').position().top -($(window).height()*0.5);
					},
					fourthval: function() {
						console.log($('.path4').position().top -($(window).height()*0.5),'path4');
						return 	$('.path4').position().top -($(window).height()*0.5);
					}
				}
			});
		},20);
		$(window).on('scroll',function(){
			if($(window).scrollTop()>$('header').position().top){
				$('nav').css('position','fixed');
			}else{
				$('nav').css('position','absolute');
			}
			$('.bg').stop().css({top:$(window).scrollTop()*0.75});
		});
		$(window).on('mousemove',function(ev){
			var lefta = ($(window).innerWidth()-ev.pageX);
			var thisPos = $('.text_shadow').offset().top;
			var thisCenter = $('.text_shadow').height() / 2;
			var thisPosCenter = ev.pageY - (thisPos + thisCenter);
			var thisPosCenter = ev.pageY - (thisPos + thisCenter);
			TweenMax.to($(".bg"), .7, {css: {left: -lefta*0.015}});
			TweenMax.to($(".cuadros1"), .7, {css: {left: -lefta*0.035}});
			TweenMax.to($(".cuadros2"), .7, {css: {left: -lefta*0.025}});
			TweenMax.to($('.text_shadow'), .5, {css:{textShadow:'' + -((lefta * 0.02)) + 'px ' + -((thisPosCenter * 0.02)) + 'px 0 rgba(24,230,152,0.5)'}});
		});
	}
	
	$(window).on('load resize',function(){
		var windowH = $(window).innerHeight();
		if(windowH>600){
			var h = Math.ceil($(window).innerHeight()/145)*145;
			$('.welcome').height(h);
		}else{
			$('.welcome').height(500);
		}
		$('.welcome h1').css('marginTop',-$('.welcome h1').height()/2);
	})
});

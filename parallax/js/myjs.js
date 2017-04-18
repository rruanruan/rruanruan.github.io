$(function(){
	var n = 1;
	var timer2 = setInterval(function(){
		var w = $(window).innerWidth();
		n*=2;
		$('.loadProgress').css('width',n/100*w);
		if(n>=100){
			clearInterval(timer2);
		}
	},300);
	setTimeout(function(){
		var timer = setInterval(function(){
			if(document.readyState =='complete'){
				$('.loaded').show();
				$('.preload').fadeOut('slow');
				$('.bg').css('background-position','0 0')
				$('.cuadros1').css('background-position','50% 0')
				$('.cuadros2').css('background-position','calc(50% - 75px) 200px');
				setTimeout(function(){
					$('.welcome h1').css({'transform':'translateY(0)','top':($('.welcome').height()/2)-67}).animate({opacity:1},500);
				},900);
				setTimeout(function(){
					$('.points1').animate({opacity:1},800);
				},1900);
				clearInterval(timer);
			}
		},1000);
	},1000);
	$("html").niceScroll({
		cursoropacitymin:0.5,
		cursorwidth:6,
		cursorcolor :'#000',
		zindex:100,
		background:'rgba(0,0,0,0.3)'
	});

	var isMobile = navigator.userAgent.match(/iPhone|iPad|iPod|Android/i);
	if(isMobile){
	}else{
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
		var h = Math.ceil($(window).innerHeight()/145)*145;
		$('.welcome').height(h);
		if(windowH>600){
			if(isMobile){
			}else{
				setTimeout(function(){
					skrollr.init({
						smoothScrollingDuration: 5000,
						constants: {
							valinit: function() {
								return $(window).height()/2;
							},
							secondval:function(){
								return $('.path2').position().top-($(window).height()/2);
							},
							thirdval: function() {
								return 	$('.path3').position().top -($(window).height()*0.5);
							},
							fourthval: function() {
								return 	$('.path4').position().top -($(window).height()*0.5);
							}
						}
					});
				},20);	
			}
		}else{
			$('.welcome').height(500);
			skrollr.init().destroy();
		}
	})
});
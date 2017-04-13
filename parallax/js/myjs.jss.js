$(function(ev){
	$('path').attr('transition','3s');
	$(window).on('scroll',function(ev){
		if($(window).scrollTop()>$('path').position().top){
			console.log();
			var rate = 2500*($(window).scrollTop()-$('path').position().top)/$('path').height();
			//$('path').attr('stroke-dashoffset',);

			move($('path').get(0),2500-rate,500,'strokeDashoffset');
		}
		
	})
	$('.welcome').on('scroll',function(ev){
		ev.preventDefault();
		console.log(ev.pageX-$(window).innerWidth()/2);
		return ;
	})
	function move(obj,target,duration,attr){
		var start = parseInt(getComputedStyle(obj)[attr]);
		clearInterval(obj.timer);
		var date = new Date().getTime();
		obj.timer = setInterval(function(){
			var now = new Date().getTime();
			var t = now-date;
			obj.style[attr] = start+(target-start)/duration*t;
			if(t>=duration){
				console.log(obj.style[attr])
				obj.style[attr] = target;
				clearInterval(obj.timer);
			}
		},30);
	}
});
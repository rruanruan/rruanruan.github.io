window.onload = function(){
			
			var oul = $('#ullist');
			var oArr =$('.array');
			var oSimg =$('simg');
			var m =0;
			var timer;
			function hoverScroll(){
				$('.simg').hover(function(){
					$(this).attr('class','simg active');
					$('.simg').not(this).attr('class','simg');
					m = $(this).index()-1;
					$('#ullist').css('top',-504*m+"px");
				});
			}
			hoverScroll();
			function mActive(){
				m = $('.simg').filter('.active').index();
				if(m==5){
					m=0;
				}
				$('#ullist').css('top',-504*m+"px");//点击时大图为当前小图下一张
				$('.simg').filter('.active').attr('class','simg');
				$('.simg').eq(m).attr('class','simg active');
			}
			function clickImg(){
				m++;
				if(m==5){
					m=0;
					}
				mActive();
			}
			$('.lis').each(function(){
				var n ;
				
				$(this).not('.present').mouseover(function(){
					$(this).attr('class','lis active');
					n = $(this).index()-1
					$('.array').eq(n).css('display','block');
					
				});
				$(this).not('.present').mouseout(function(){
					$(this).attr('class','lis');
					$('.array').css('display','none');
				})
				
			});
		
				
			
			
			function loop(){
				timer=setInterval(function(){
					mActive();
				},6000);
			} 
				
			loop();
			
			function scrollImg(){
				for(var i= 0;i<oSimg.length;i++){
					oSimg[i].index = i;
					oSimg[i].onmouseover = function(){
						m =this.index;
						mActive();	
					}
					oSimg[i].onmouseout = function(){
						mActive();	
					}
				}
			}
			scrollImg();
			
			function prenext(){
				$('#rightb').click(function(){
					
					mActive();
					
				});
				$('#leftb').click(function(){
					m = $('.simg').filter('.active').index()-2;
					console.log("===="+m);
					if(m==-1){
						m=4;
					}
					$('#ullist').css('top',-504*m+"px");//点击时大图为当前小图下一张
					$('.simg').filter('.active').attr('class','simg');
					$('.simg').eq(m).attr('class','simg active');
					
				});
			}
			prenext();
			function circlemove(){
				var opic = $('.picstar');
				var olt = $('.lt');
				var olb = $('.lb');
				var ort = $('.rt');
				var orb = $('.rb');
				var opinfo = $('.pinfo');
				console.log(opic);
				for(var i=0;i<opic.length;i++){
					opic[i].index = i;
					var timer1;
					opic[i].onmouseenter  = function(){
						
						 index = this.index;
						 var width = olt[index].offsetWidth;
						 var iSpeed = 15;
						 if(olt[index].offsetHeight <170){
						 	timer1 = setInterval(function(){
						 		iSpeed*=0.98;
								width += iSpeed;
								olt[index].style.width =olt[index].style.height=ort[index].style.width=ort[index].style.height=olb[index].style.width=olb[index].style.height=olb[index].style.width =olb[index].style.height=width+"px";
								if(olt[index].offsetHeight >= 170){
									clearInterval(timer1);
									olt[index].style.width =olt[index].style.height=ort[index].style.width=ort[index].style.height=olb[index].style.width=olb[index].style.height=olb[index].style.width =olb[index].style.height=170+"px";
									opinfo[index].style.display="block";
								}
							},50);
						 }
					}
					opic[i].onmouseleave = function(){
						opinfo[index].style.display="none";
						clearInterval(timer1);
						olt[index].style.width =olt[index].style.height=ort[index].style.width=ort[index].style.height=olb[index].style.width=olb[index].style.height=olb[index].style.width =olb[index].style.height=60+"px";
					}
				}
			}
			circlemove();
		}
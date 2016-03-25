//news的轮播
$(document).ready(function() {
			var JSONA = {"width": 415,"height": 244,"left": 84,"top": 145,"opacity":1};
			var JSONB = {"width": 210,"height": 120,"left": 499,"top": 145,"opacity":1};
			var JSONC = {"width": 210,"height": 120,"left": 707,"top": 145,"opacity":1};
			
			var classArray = ["stateA","stateB","stateC"]

			var lis = $(".lunbo ul li");
			var circles = $(".circles span");

			var nowimg = 2;
			var speed = 400;

			var god = false;	//上帝的身份证

			$(".rightBtn").click(rightBtnFunc);
			function rightBtnFunc(){
				if(!lis.is(":animated") || god){
					//先运动
					$(".stateA").css(JSONC);
					$(".stateB").animate(JSONA,speed);
					$(".stateC").animate(JSONB,speed);

					//交换身份
					//删除数组最后一项，然后再第一项插入
					classArray.unshift(classArray.pop());
					 
					for(var i = 0 ; i <= lis.length - 1 ; i++){
						lis.eq(i).attr("class",classArray[i]);
					}

					$(".stateA").css(JSONC);


				}
			}

			//定时器
			var timer = setInterval(rightBtnFunc, 3000);

		});

//big_word的轮播
var $num=0;
function fn(){
		$('.big_word ul li').eq($num).fadeOut();
		$num++;
		//if($num>4){$num=0} //以往认为计算数值
		//if($num>$('.main ul li').length-1){$num=0} // 交给计算机去计算li的长度值
		$num=$num%$('.big_word ul li').length; //%是去余数的意思，例如1%5 最后取值为1
		$('.big_word ul li').removeClass('show');
		$('.big_word ul li').eq($num).fadeIn();
	}
var timer=setInterval(fn,3000);

//small_word的轮播
var $num1=0;
function fn1(){
		$('.small_word ul li').eq($num1).fadeOut();
		$num1++;
		//if($num>4){$num=0} //以往认为计算数值
		//if($num>$('.main ul li').length-1){$num=0} // 交给计算机去计算li的长度值
		$num1=$num1%$('.small_word ul li').length; //%是去余数的意思，例如1%5 最后取值为1
		$('.small_word ul li').removeClass('show');
		$('.small_word ul li').eq($num1).fadeIn();
	}
var timer1=setInterval(fn1,3000);

//small_word1的轮播
var $num2=0;
function fn2(){
		$('.small_word1 ul li').eq($num2).fadeOut();
		$num2++;
		//if($num>4){$num=0} //以往认为计算数值
		//if($num>$('.main ul li').length-1){$num=0} // 交给计算机去计算li的长度值
		$num2=$num2%$('.small_word1 ul li').length; //%是去余数的意思，例如1%5 最后取值为1
		$('.small_word1 ul li').removeClass('show');
		$('.small_word1 ul li').eq($num2).fadeIn();
	}
var timer2=setInterval(fn2,3000);


// 精品课程的轮播
$(function(){
	var num_=0;
	var timer_=null;
	
	function fn_(){
		num_-=3;
		if(num_<-1170){num_=0}
		$('.class_bottom_wrap ul').css('left',num_)
	}
	
	
	var timer_=setInterval(fn_,30)
	
	$('.class_bottom_wrap li').mouseover(function(e) {
        clearInterval(timer_);
		$(this).siblings().stop().fadeTo(200,0.5)
    });
	$('.class_bottom_wrap li').mouseout(function(e) {
		clearInterval(timer_);
        timer_=setInterval(fn_,30)
		$('.class_bottom_wrap li').stop().fadeTo(200,1)
    });
	
})

// 以下是图文里的图片轮播
$(function(){
	var num_img=0;//控制播放图片的编号

	function img(){
		num_img++;
		if(num_img>6){
			num_img=1;
			$('.ul_wrap ul').css('left','0')
		}
        $('.ul_wrap ul').animate({left:num_img*-130},500);
	}

	$('.arr_right').click(function(e) {

		num_img++;
		if(num_img>6){
			num_img=1;
			$('.ul_wrap ul').css('left','0')
		}
        $('.ul_wrap ul').animate({left:num_img*-130},500);
		
    });
	$('.arr_left').click(function(e) {
		num_img--;
		if(num_img<0){
			num_img=5;
			$('.ul_wrap ul').css('left',-780)
		}
        $('.ul_wrap ul').animate({left:num_img*-130},500);
    });

    var timer_img=setInterval(img, 3000);

    $('.arr_right,.arr_left').mouseover(function(event) {
		clearInterval(timer_img);
		time=null;
	});
	$('.arr_right,.arr_left').mouseout(function(event) {
		clearInterval(time);
		timer_img=setInterval(img, 3000);
	});
	
})


$('.page li').click(function(event) {
	$('.page li').css('color','#333');
	$(this).css('color','#fe5771');
});


//text-img的动态
function shuzhe(){
	$('.img_box1 .shu_zhe').animate({left:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(shuzhe,0);

function shuzhe1(){
	$('.img_box6 .shu_zhe').animate({left:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(shuzhe1,10000);

function shuzhe2(){
	$('.img_box1 .shu_zhe').animate({left:'229px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(shuzhe2,15000);

function shuzhe3(){
	$('.img_box1 .shu_zhe').animate({left:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(shuzhe3,25000);

function shuzhe4(){
	$('.img_box7 .quan_zhe').animate({left:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(shuzhe4,40000);

function shuzhe5(){
	$('.img_box2 .quan_zhe').animate({left:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(shuzhe5,40000);


function hengzhe(){
	$('.img_box8 .heng_zhe').animate({top:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(hengzhe,5000);

function hengzhe1(){
	$('.img_box5 .heng_zhe').animate({top:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(hengzhe1,20000);

function hengzhe2(){
	$('.img_box4 .heng_zhe').animate({top:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(hengzhe2,15000);

function hengzhe3(){
	$('.img_box4 .heng_zhe').animate({top:'228px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(hengzhe3,25000);

function hengzhe4(){
	$('.img_box3 .heng_zhe').animate({top:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(hengzhe4,25000);

function hengzhe5(){
	$('.img_box9 .heng_zhe').animate({top:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(hengzhe5,30000);

function hengzhe6(){
	$('.img_box4 .heng_zhe').animate({top:'0px'},{duration:3000,easing:'easeOutQuart'});
}
setTimeout(hengzhe6,35000);



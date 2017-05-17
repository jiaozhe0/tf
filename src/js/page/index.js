require('../../less/common.less');
require('../../less/index.less');
require('swiper/dist/css/swiper.min.css')
var Chart = require('../common/chart.js');	
	 var Swiper = require('swiper');
	 require('../common/ScrollSpy');
	 require('./common.js');
	
require(['tween.js'], function (TWEEN) {
	var year = $('#years'),h = parseInt(year.offset().top-400);
	function num(){
		var students = $('#student'),school=$('#school'),prob=$('#prob');
		var coords = { years: 0, students:39000,school:0,prob:0 };
		var tween = new TWEEN.Tween(coords)
		.to({ years: 10, students:40000,school:15,prob:95  }, 1500)
		.onUpdate(function() {
			year.text(this.years.toFixed(0));
			school.text(this.school.toFixed(0));
			students.text(this.students.toFixed(0));
			prob.text(this.prob.toFixed(0));
		}).start();
		requestAnimationFrame(animate);
		function animate(time) {
			requestAnimationFrame(animate);
			TWEEN.update(time);
		}
	}
	
	
	$(window).on("scroll", function(){
		var ll = parseInt($(document).scrollTop());
		console.log(ll,h)
		if(ll >= h ){
			num();

		}
	});
	
	
		
var mySwiper = new Swiper ('.swiper-container', {
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
 		})
		



//发展历程

	var timerLine = $('.time_item'),
     timer = $('.timer_content');
		var index = 0,lTimer = null;
		timerLine.removeClass('on');
		function slider(){
			timerLine.removeClass('on');
			timer.removeClass('on');
			timerLine.eq(index).addClass('on');
			timer.eq(index).addClass('on');;
			index++;
			if(index>=5){
				index = 0;
			}
			lTimer = setTimeout(slider,4000);
		};

		slider();
		timerLine.each(function(i){
			var _this = $(this);
			_this.click(function(){
				clearTimeout(lTimer);
				timerLine.removeClass('on');
				timer.removeClass('on');
				_this.addClass('on');
				timer.eq(i).addClass('on');
			})
		})
	



});




// 图表
var ctx = $("#myChart").get(0).getContext("2d");
var data = {
	labels : [0,48,40,19,96,27,100,40,69,56,59,90,81,40,19,0],
	datasets : [
		{
			fillColor : "rgba(81,187,229,0.8)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			// pointStrokeColor : "#fff",
			data : [0,59,90,81,56,55,40,69,56,59,90,81,40,19,0]
		},
		{
			fillColor : "rgba(79,152,241,.8)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			// pointStrokeColor : "#fff",
			data : [0,48,40,19,96,27,100,40,69,56,59,90,81,40,19,0]
		}
	]
}
console.log(Chart)
var d = new Chart(ctx).Line(data,{scaleShowLabels : false,
 // scaleFontColor : "transparent",
 // scaleShowGridLines:false,
	scaleLineWidth:0,
	pointDotStrokeWidth:0,
	datasetStrokeWidth:2,
	// pointDotRadius:5,
	datasetStrokeWidth : 1
	}
);

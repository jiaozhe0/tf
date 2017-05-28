require('../../less/common.less');
require('../../less/index.less');
require('swiper/dist/css/swiper.min.css')
var echarts = require('echarts');
	 var Swiper = require('swiper');
	 require('../common/ScrollSpy');
	 require('./common.js');
	 var show = require('../common/from.js');

	
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
	$('#appoint_btn').click(function(){
		
		show.show();
	})
	
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
	var timerLine = $('.path_index'),
     timer = $('.history_path_text');
		var index = 0,lTimer = null;
		timerLine.removeClass('on');
		function slider(){
			timerLine.removeClass('on').next().removeClass('ons');
			timer.removeClass('on');
			timer.hide();
			timerLine.eq(index).addClass('on').next().addClass('ons');
			// timer.eq(index).addClass('on');
			timer.eq(index).show();
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
				timer.hide();
				timerLine.removeClass('on');
				timer.removeClass('on');
				_this.addClass('on').next().addClass('ons');
				timer.eq(i).show();;
			})
		})
	
function drawCanvasOne() {
	var t = document.getElementById("wave"),
		e = echarts.init(t),
		i = e.getZr(),
		a = e.getWidth(),
		c = e.getHeight(),
		o = new echarts.graphic.Group;
	i.add(o);
	var n = 3;
	800 > a && (n = 2);
	for (var r = 0; 3 > r; r++) {
		for (var s = [], l = 0; n + 1 >= l; l++) {
			var h = c / 10 * r + c / 6,
				d = Math.random() * c / 8 + h,
				g = c - Math.random() * c / 8 - h,
				m = [
					[2 * l * a / n / 2, r % 2 ? d : g],
					[(2 * l + 1) * a / n / 2, r % 2 ? g : d]
				];
			s.push(m[0], m[1])
		}
		console.log(s.toString())
		var u = new echarts.graphic.Polyline({
			shape: {
				points: r==1 ? s : s,
				smooth: .4
			},
			style: {
				stroke: "#fff",
				opacity: 1 / (r + 1),
				lineWidth: 1.2 / (r + 1) + .8
			},
			silent: !0,
			position: [-r * a / 8, 35 * -(r - .5)]
		}),
			y = new echarts.graphic.Rect({
				shape: {
					x: 0,
					y: 0,
					width: 0,
					height: c
				},
				position: [r * a / 8, 0]
			});
		o.add(u), y.animateTo({
			shape: {
				width: a
			}
		}, 2e3, 800 * Math.random()), u.setClipPath(y), n += 1
	}
	// $(window).on("resize", function() {
	// 	var t = e.getWidth(),
	// 		i = e.getHeight();
	// 	e.resize();
	// 	var a = e.getWidth(),
	// 		c = e.getHeight();
	// 	y.setShape({
	// 		width: a,
	// 		height: c
	// 	});
	// 	var n = a / t,
	// 		r = c / i;
	// 	o.eachChild(function(t) {
	// 		t.position[0] *= n, t.position[1] *= r, t.shape.points.forEach(function(t) {
	// 			t[0] *= n, t[1] *= r
	// 		}), t.dirty(!0)
	// 	})
	// })
}

drawCanvasOne()


});




// 图表
// var ctx = $("#myChart").get(0).getContext("2d");
// var data = {
// 	labels : [0,48,40,19,96,27,100,40,69,56,59,90,81,40,19,0],
// 	datasets : [
// 		{
// 			fillColor : "rgba(81,187,229,0.8)",
// 			strokeColor : "rgba(220,220,220,1)",
// 			pointColor : "rgba(220,220,220,1)",
// 			// pointStrokeColor : "#fff",
// 			data : [0,59,90,81,56,55,40,69,56,59,90,81,40,19,0]
// 		},
// 		{
// 			fillColor : "rgba(79,152,241,.8)",
// 			strokeColor : "rgba(151,187,205,1)",
// 			pointColor : "rgba(151,187,205,1)",
// 			// pointStrokeColor : "#fff",
// 			data : [0,48,40,19,96,27,100,40,69,56,59,90,81,40,19,0]
// 		}
// 	]
// }

// var d = new Chart(ctx).Line(data,{scaleShowLabels : false,
//  // scaleFontColor : "transparent",
//  // scaleShowGridLines:false,
// 	scaleLineWidth:0,
// 	pointDotStrokeWidth:0,
// 	datasetStrokeWidth:2,
// 	// pointDotRadius:5,
// 	datasetStrokeWidth : 1
// 	}
// );

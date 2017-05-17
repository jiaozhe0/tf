require('../../less/common.less')
require('../../less/news.less')
require('swiper/dist/css/swiper.min.css');
require('../common/ScrollSpy');
require('./common.js');

var Swiper = require('swiper');

 var mySwiper = new Swiper ('.swiper-container', {
   	autoplay: 5000,
    loop: true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  })
 
 require(['../common/ScrollSpy','./common.js'],function(ScorrllSpy){

})
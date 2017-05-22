require('../../less/common.less');
require('../../less/tutor.less');
var fullpage = require('fullpage.js');
/*!
 * fullpage 1.4.0
 * Author: 抹桥 <yq12315@gmail.com>(http://www.kisnows.com)
 * Homepage: https://github.com/kisnows/fullpage#readme
 * Release under MIT.
 * 
 */
require('../../less/fullpage.css');

$(function(){
     $("#fullpage").fullpage({
     	 		slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#ef820'],
              // 绑定菜单
               anchors: ['page1','page2','page3','page4'],
               menu:'#menu',
              
                //滚动到某一屏后产生的动画效果
                afterLoad: function(link, index){
                 },
                 //离开某一屏后恢复到初始效果
                  onLeave: function(link, index){
            }
     })
})
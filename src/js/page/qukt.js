var fullpage = require('fullpage');
$(function(){
     $("#fullpage").fullpage({
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
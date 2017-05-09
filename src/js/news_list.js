require('../less/common.less')
require('../less/news.less')

// alert(jQuery(".focusBox"));




require(['jquery','./common/superslide.js'],function(jQuery){
	
	// alert('sfsdf')
       jQuery(".focusBox").slide({ mainCell:".pic",effect:"left", autoPlay:true, delayTime:300});
            
})
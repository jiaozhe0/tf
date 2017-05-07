
define( function(fn){
	var header = $('#header')
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			header.addClass('mini')
		}else{
			header.removeClass('mini')
		}
	})
})
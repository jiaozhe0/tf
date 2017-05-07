
define( function(fn){
	var header = $('#header'),top = $('#top')
	
	 top.click(function () {
	     $("html, body").animate({scrollTop: 0}, 820)
	 })
	 var $backToTopFun = function () {
	     var st = $(document).scrollTop(), winh = $(window).height();
		    if(st>100){
				header.addClass('mini');
				top.show(500)
			}else{
				header.removeClass('mini')
				 top.hide()
			}
 	};
 	$(window).on("scroll", $backToTopFun);
})


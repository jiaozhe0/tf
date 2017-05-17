var mask = $('#mask'),html = $('html'),applyBtn = $('#apply_btn'),
form=$('form'),close = $('#close');

function show(){
	var h = $('body').height();
	var wH=window.innerHeight,
		sTop = document.body.scrollTop;
	mask.height(h).show();
	$('#appointment_form').offset({
		top: (wH-430)/2+sTop
	})
	
	html.css('overflow','hidden')
}

function hide(){
	mask.hide();
	html.css('overflow','auto')
}

applyBtn.click(function(){
	$.ajax({
		url:'',
		type:'POST',
		data:form.serialize(),
	})
})

close.click(hide)

module.exports = {
	show:show,

}


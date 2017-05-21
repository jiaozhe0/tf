var mask = $('#mask'),html = $('html'),applyBtn = $('#apply_btn'),
form=$('form'),close = $('#close'),f = form[0];
var name = form.find('#name'),tel=form.find('#tel'),school=form.find('#school'),classes=$('#classes');



var flag = false;

function voids(e,req){
	var val = e.val();
	if(val !== ''){
		if(req!==null || req!==undefined){
			if(val.match(req)){
			    e.next().hide().parent().css('border-color','green');
			   flag = true;
			}else{
			   e.next().show().parent().css('border-color','red');
			   flag = false;
			}
		}else{
			e.next().hide().parent().css('border-color','green');
			flag = true;
		}
		
	 
	}else{
		 e.next().show().parent().css('border-color','red');
		  flag = false;
	}
}

name.blur(function(){
	voids($(this))
})

tel.blur(function(){
	voids($(this),/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/)
})

school.blur(function(){
	voids($(this))
})
// classes.blur(function(){
// 	voids($(this))
// })


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
	voids(name);
	voids(tel);
	voids(school);

	if(flag){
		hide();
		$.ajax({
			url:'',
			type:'POST',
			data:form.serialize(),
		})
	}
})

close.click(hide)

module.exports = {
	show:show,

}


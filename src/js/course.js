require('../less/common.less');
require('../less/class.less');

var show = require('./common/from.js');
$(function(){
	$('#appoint_btn').click(function(){
		
		show.show();
	})
})
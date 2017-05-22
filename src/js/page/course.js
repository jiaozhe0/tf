require('../../less/common.less');
require('../../less/class.less');
require('../common/ScrollSpy');
require('./common.js');

var show = require('../common/from.js');
$(function(){
	$('#appoint_btn').click(function(){
		
		show.show();
	})
})
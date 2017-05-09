require('../less/common.less');
require('../less/class.less');
const Vue = require('vue');

new Vue({
	el:'#course',
	data:{
		nav:[{
			title:'学期:',
			items:[
				{
					name:'不限',
					id:'term-0'
				},
				{
					name:'全年',
					id:'term-1'
				},
				{
					name:'秋季',
					id:'term-2'
				},
				{
					name:'寒假',
					id:'term-3'
				},
				{
					name:'春季',
					id:'term-4'
				},
				{
					name:'暑假',
					id:'term-5'
				}
			]
		},{
			 title:'分类:',
			 items:[{
			 	name:"不限",
			 	id:"sort-0"
			 },{
			 	name:"小学",
			 	id:"sort-1"
			 },{
			 	name:"初中",
			 	id:"sort-2"
			 }
			 ]
		},{

		},{

		}],
		courses:[
			{
				img:'../img/cz.jpg',
				name:'小升初加强班',
				student:'六年级学生',
				startTime:'2015',
				add:'张店区巴拉巴拉',
				intro:'专题强化，逐个攻破',
				id:'d'
			},
			{
				img:'../img/cz.jpg',
				name:'小升初加强班',
				student:'六年级学生',
				startTime:'2015',
				add:'张店区巴拉巴拉',
				intro:'专题强化，逐个攻破',
				id:'d'
			},

		],
		termId:'term-0',
		sortId:'sort-0',
		classId:'class-0',
		subjectId:'subjectId-0',
		typeId:'type-0',

	},
	methods:{
		Choice:function(id){
			
		}
	},
	created:function(){

	}
})
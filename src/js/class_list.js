require('../less/common.less');
require('../less/class.less');
const Vue = require('vue');

new Vue({
	el:'#course',
	data:{
		term:[
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
		],
		sort:[
			 {
			 	name:"不限",
			 	id:"sort-0"
			 },{
			 	name:"小学",
			 	id:"sort-1"
			 },{
			 	name:"初中",
			 	id:"sort-2"
			 }
		],
		classes:[
			 {
			 	name:"不限",
			 	id:"class-0"
			 },{
			 	name:"四年级",
			 	id:"class-1"
			 },{
			 	name:"五年级",
			 	id:"class-2"
			 },{
			 	name:"初一",
			 	id:"class-3"
			 },{
			 	name:"初二",
			 	id:"class-4"
			 },{
			 	name:"初三",
			 	id:"class-5"
			 },{
			 	name:"初四",
			 	id:"class-6"
			 }
		],
		subject:[
			{
			 	name:"不限",
			 	id:"subject-0"
			 },{
			 	name:"语文",
			 	id:"subject-1"
			 },{
			 	name:"数学",
			 	id:"subject-2"
			 },{
			 	name:"英文",
			 	id:"subject-3"
			 },{
			 	name:"物理",
			 	id:"subject-4"
			 },{
			 	name:"化学",
			 	id:"subject-5"
			 },{
			 	name:"生物",
			 	id:"subject-6"
			 },{
			 	name:"地理",
			 	id:"subject-7"
			 },{		
			 	name:"计算机",
			 	id:"subject-8"
			 }
			 ],
		type:[
			{
			 	name:"不限",
			 	id:"type-0"
			 },{
			 	name:"全优讲堂",
			 	id:"type-1"
			 },{
			 	name:"决胜中考班",
			 	id:"type-2"
			 },{
			 	name:"火箭班",
			 	id:"type-3"
			 },{
			 	name:"强化班",
			 	id:"type-4"
			 },{
			 	name:"拔尖班",
			 	id:"type-5"
			 },{
			 	name:"趣味课堂",
			 	id:"type-6"
			 },{		
			 	name:"押题班",
			 	id:"type-7"
			 },{
			 	name:"趣味课堂",
			 	id:"type-8"
			 },{
			 	name:"提高班",
			 	id:"type-9"
			 },{		
			 	name:"衔接班",
			 	id:"type-10"
			 }
		],
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
		choice:function(id){
			var t = id.split('-');
			switch(t[0]){
				case 'term':
					this.termId = id
				break;
				case 'sort':
					this.sortId = id
				break;
				case 'class':
					this.classId = id
				break;
				case 'subject':
					this.subjectId = id
				break;
				defalut:
					this.typeId = id
				break;
			}
			// this.termId = id
		},
		getData:function(data){
			var _this = this;
			alert('dfdf')
			$.get('www.baicu.com',function(data){
				// _this.
				alert('dfdf')
			})	
		}
	},
		computed:{

		},
		watch:{
			termId:function(val){
					this.getData()
			}
		},

	
	created:function(){

	}
})
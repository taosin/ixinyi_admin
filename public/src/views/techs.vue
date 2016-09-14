<!-- 技术 -->
<template>
	<div class="techs">
		<div class="techs-top">
			<label>在这灯火辉煌的城市，我一无所有</label>
			<div class="techs-bios">
				<a v-for="nav in navs" class="bio {{current ===$index?'active':''}}" @click="selectTag($index)">{{nav.name}}</a>
			</div>
		</div>
		<div class="techs-main">
			<div class="techs-content">
				<div class="techs-lists">
					<div class="techs-list" v-for="data in datas" @click="goDetail($index)">
						<div class="title">
							<a href="#">{{data.title}}</a>
						</div>
						<a class="bio" v-for="b in data.bio">{{b.name}}</a>
						<label class="date">{{data.date}}</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// import * from './../../components/*';
import './../../static/css/techs.scss';
export default{
	components:{
        // *
    },
    data(){
    	return{
    		navs:[
    		{ name:'全部', id:'0' },
    		{ name:'javascript', id:'1' },
    		{ name:'css', id:'2' },
    		{ name:'html', id:'3' },
    		{ name:'adobe', id:'4' },
    		{ name:'node', id:'5' },
    		{ name:'vue', id:'6' }
    		],
    		current:0,
    		datas:[
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }, { name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }, { name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }, { name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }, { name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] },
    		{ title:'钢铁是怎样炼成的', date:'2014-34-12', bio:[{ name:'javascript' }, { name:'vue' }] }
    		]
    	};
    },
    ready(){
    },
    watch:{
    },
    computed:{
    },
    methods:{

    	// 查看全文
    	goDetail(id){
    		const url = '/index/techDetail';
    		window.router.go({
    			path:url
    		});
    	},
    	selectTag(index){
    		this.current = index;
    	}
    }
};
</script>
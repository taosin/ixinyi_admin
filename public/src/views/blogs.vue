<!-- 博客页 -->
<template>
	<div class="blogs">
		<div class="main">
			<div class="blog" v-for="data in datas">
				<div class="title">
					<h3><a @click="goDetail($index)">{{data.title}}</a></h3>
					<span>发布时间：{{data.date}}</span>
				</div>
				<div class="tags">
					<span>标签：</span>
					<a v-for="tag in data.bio">{{tag.name}}</a>
				</div>
				<div class="content">
					<p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
				</div>
				<div class="read">
					<a @click="goDetail($index)">阅读全文</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// import * from './../../components/*';
import './../../static/css/blogs.scss';
export default{
	components:{
        // *
    },
    data(){
    	return{
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
    	// 跳转到详情页
    	goDetail(index){
    		const url = '/index/blog';
    		window.router.go({
    			path:url
    		});
    	}
    }
};
</script>

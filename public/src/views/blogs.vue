<!-- 博客页 -->
<template>
	<div class="blogs">
		<div class="main">
			<div class="blog" v-for="data in datas">
				<div class="title">
					<h3>{{data.title}}</h3>
					<span>发布时间：{{data.date}}</span>
				</div>
				<div class="tags">
					<a v-for="tag in data.bio">{{tag.name}}</a>
				</div>
				<div class="content">
					<p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
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
    }
};
</script>

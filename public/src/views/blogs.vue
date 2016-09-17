<!-- 博客页 -->
<template>
	<div class="blogs">
		<div class="main">
			<div class="blog" v-for="article in articles">
				<div class="title">
					<h3><a @click="goDetail($index)">{{article.title}}</a></h3>
					<span>发布时间：{{article.date}}</span>
				</div>
				<div class="tags">
					<span>标签：</span>
					<a v-for="tag in data.bio">{{article.name}}</a>
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
import { getArticles } from './../service/article';
export default{
	components:{
        // *
    },
    vuex:{
    	getters:{
    		datas: state => state.articles
    	},
    	actions:{
    		getArticles
    	}
    },
    data(){
    	return{
    		articles:[]
	    	};
    },
    attached(){
    	this.getArticles();
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

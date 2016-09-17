<!-- 文章详情页 -->
<template>
	<div class="blog">
		<div class="top">
			<div class="title">
				<h3><a>{{article.title}}</a></h3>
			</div>
			<div class="date">
				<span>发布于：{{article.createdAt}}</span>｜
				<span>标签：{{article.tag}}</span>
			</div>
		</div>
		<div class="main">
			<div v-html="article.content" class="content">
			</div>
		</div>
		<div class="bov">
			<div class="pre">
				<a>上一个文章</a>
			</div>
			<div class="next">
				<a>下一个文章</a>
			</div>
		</div>
	</div>
</template>
<script>
	import './../../static/css/blogs.scss';
// import * from './../../components/*';
import { getArticleById } from './../service/article';
export default{
	components:{
        // *
    },
    data(){
    	return{
    		article:{}
    	};
    },
    vuex:{
    	getters:{
    		result: state => state.article
    	},
    	actions:{
    		getArticleById
    	}
    },
    attached(){
    	const id = this.$route.params.aid;
    	console.info(id);
    	this.getArticleById(id);
    },
    watch:{
    	result(val){
    		this.article = val;
    		document.title = val.title;
    	}
    },
    computed:{
    },
    methods:{
    }
};
</script>
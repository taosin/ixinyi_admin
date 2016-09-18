<!-- 博客页 -->
<template>
	<div class="blogs">
		<div class="main">
			<div class="blog" v-for="article in articles">
				<div class="title">
					<h3><a @click="goDetail(article.id)">{{article.title}}</a></h3>
					<span>发布时间：{{this.$formatDate(article.createdAt, 'yyyy-MM-dd hh:mm')}}</span>
				</div>
				<div class="tags">
					<span>标签：</span>
					<a v-if="article.tag">{{article.tag}}</a>
				</div>
				<div class="content">
					<div v-html="article.content"></div>
				</div>
				<div class="read">
					<a @click="goDetail(article.id)">阅读全文</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// import * from './../../components/*';
import './../../static/css/blogs.scss';
import { getArticles } from './../service/article';
const marked = require('./../../static/js/marked.min.js');
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
    filters: {
    	marked: marked
    },
    data(){
    	return{
    		articles:[],
    		start:0,
    		limit:5
    	};
    },
    attached(){
    	const data = {};
    	data.start = this.start;
    	data.limit = this.limit;
    	this.getArticles(data);
    },
    watch:{
    	datas(){
    		this.articles = this.$deepCopy(this.datas);
    	}
    },
    computed:{
    },
    methods:{
    	// 跳转到详情页
    	goDetail(id){
    		const url = '/index/blog/'+id;
    		window.router.go({
    			path:url
    		});
    	}
    }
};
</script>

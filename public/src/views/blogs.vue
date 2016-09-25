<template>
	<div class="blogs">

		<div class="main" >
			<div class="blog" v-if="articles" v-for="article in articles">
				<div class="title">
					<p><a @click="goDetail(article.id, $index, article.createdAt)">{{article.title}}</a></p>
					<span>发布时间：{{this.$formatDate(article.createdAt, 'yyyy-MM-dd hh:mm')}}</span>
				</div>
				<div class="tags">
					<span>标签：</span>
					<div class="icon">
					</div>
					<a v-if="article.tag">{{article.tag}}</a>
				</div>
				<div class="content">
					<div v-html="article.content"></div>
				</div>
				<div class="read">
					<a @click="goDetail(article.id, $index, article.createdAt)">阅读全文</a>
				</div>
			</div>
		</div>
		<!-- 加载更多 -->
		<div class="loadmore">
			<!-- <div> -->
			<a @click="loadMore" v-if="articles.length < total">加载更多</a>
		</div>
	</div>
</template>
<script>
// import * from './../../components/*';
import './../../static/css/blogs.scss';
import { getArticles, getArticleCount } from './../service/article';
const marked = require('./../../static/js/marked.min.js');
export default{
	components:{
        // *
    },
    vuex:{
    	getters:{
    		datas: state => state.articles,
    		total:state => state.articleCount
    	},
    	actions:{
    		getArticles,
    		getArticleCount
    	}
    },
    filters: {
    	marked: marked
    },
    data(){
    	return{
    		articles:[],
    		start:0,
    		limit:5,
    		currentStart:0,
    		show:false
    	};
    },
    attached(){
    	const data = {};
    	data.start = this.start;
    	data.limit = this.limit;
    	this.getArticles(data);
    	this.getArticleCount();
    	this.show = true;
    },
    watch:{
    	datas(){
    		this.articles = this.$deepCopy(this.articles.concat(this.datas));
    		this.show = false;
    	}
    },
    computed:{
    },
    methods:{
    	// 跳转到详情页
    	goDetail(id, index, date){
    		const url = '/index/blog/'+ index + '/' + id +'/'+this.$formatDate(date, 'yyyy-MM-dd');
    		window.router.go({
    			path:url
    		});
    		this.$h5setValue('sin-index_tx', index+'');
    	},

    	// 加载更多
    	loadMore(){
    		this.currentStart ++;
    		this.start = this.currentStart * this.limit;
    		const data = {};
    		data.start = this.start;
    		data.limit = this.limit;
    		this.getArticles(data);
    	}
    }
};
</script>

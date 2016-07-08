<template>
	<div class="articles-lists">
		<div class="articles-list" v-for="article in articles">
			<div class="article-header">
				<h1>{{article._serverData.title}}</h1>
				<h6>发布时间：{{this.$formatDate(article.createdAt, 'yyyy-MM-dd hh:mm')}}</h6>
			</div>
			<div  class="article-content">
				{{article._serverData.content}}
			</div>
			<div class="article-footer">
				<a class="common-a" @click="toArticle">阅读全文</a>
			</div>
		</div>
	</div>
</template>
<script>
	import { getArticles } from './../service/article';
	export default{
		components:{
		},
		data(){
			return{
				articles:[]
			};
		},
		ready(){
			
		},
		vuex:{
			getters:{
				data: state => state.articles
			},
			actions:{
				getArticles
			}
		},
		created(){
			this.getArticles();
		},
		watch:{
			data(){
				this.articles = this.data;
			}
		},
		computed:{
		},
		methods:{
			toArticle(){
				const url ='./article';
				window.router.go({
					path: url
				});
			}
		}
	};
</script>
<style type="text/css">
	.article-header{
		text-align: center;
	}
	.articles-list{
		/*border-bottom: 1px solid*/
		width: 100%;
	}
	.article-footer {
		width: 100%;
		text-align: center;
		/* clear: both; */
		margin-top: 20px;
		height: 40px;
	}
	.common-a{
		padding: 5px 20px;
		border: 2px solid #000000;
		font-size: 14px;
		text-decoration: none;
		color: #000000;	
	}
	.common-a:hover{
		background: #000000;
		color: #ffffff;
		text-decoration: none;
		transition: 1.0s;
	}
</style>
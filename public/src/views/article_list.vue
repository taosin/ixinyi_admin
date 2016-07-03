<template>
	<div class="articles-lists">
		<div class="articles-list" v-for="article in articles">
			<div class="article-header">
				<h1>{{article.title}}</h1>
			</div>
			<div  class="article-content">
				{{article.content}}
			</div>
			<div class="article-footer">
				<a class="common-a" href="">阅读全文</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		components:{
		},
		data(){
			return{
				articles:[
				{ title:'you are my first', date:'2015-12-12', content:'需求描述最近加班加点完成了一个上传文件的需求，听起来很简单想着也很简单，但是知易行难实际操作起来，还是遇到了很多问题，现在就来总结一下，使用vue来构建一个上传文件的页面中会遇到哪些问题，其中的一些问题也可能是用别的框架也会遇到的问题。' },
				{ title:'you are my first', date:'2015-12-12', content:'需求描述最近加班加点完成了一个上传文件的需求，听起来很简单想着也很简单，但是知易行难实际操作起来，还是遇到了很多问题，现在就来总结一下，使用vue来构建一个上传文件的页面中会遇到哪些问题，其中的一些问题也可能是用别的框架也会遇到的问题。' }
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
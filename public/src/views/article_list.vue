<template>
	<div class="articles-lists">
		<div class="articles-list" v-for="article in articles">
			<div class="article-header">
				<h1>{{article.title}}</h1>
			</div>
			<div  class="article-content">
				{{article.content}}
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
</style>
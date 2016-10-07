<template>
	<div class="blog">
		<div class="top">
			<div class="title">
				<h3><a>{{article.title}}</a></h3>
			</div>
			<div class="date">
				<span>{{this.$formatDate(article.createdAt, 'yyyy-MM-dd hh:mm')}}</span>｜
				<span>{{article.tag}}</span>｜
                <span id="busuanzi_container_page_pv">
                    <span id="busuanzi_value_page_pv"></span>
                </span>
            </div>
        </div>
        <div class="main">
           <div v-html="article.content" class="content">
           </div>
       </div>
       <div class="bov">
			<!-- <div class="pre">
				<a @click="forward('pre')">上一个文章</a>
			</div>
			<div class="next">
				<a @click="forward('next')">下一个文章</a>
			</div> -->
      </div>
  </div>
</template>
<script>
	import './../../static/css/blogs.scss';
    import { getArticleById } from './../service/article';
    export default{
       components:{
       },
       data(){
           return{
              article:{}
          };
      },
      vuex:{
       getters:{
          result: state => state.article,
          datas: state => state.articles
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
   forward(type){
      switch(type) {
         case 'pre':

         break;
         case 'type':
         break;
         default:
     }
 }
}
};
</script>
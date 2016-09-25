<!-- 文章列表 -->
<template>
	<div class="article_list">
		<div class="content">
			<table class="table">
				<thead>
					<th>序号</th>
					<th>标题</th>
					<th>状态</th>
					<th>时间</th>
					<th>操作</th>
				</thead>
				<tbody>
					<tr v-for="ar in articles">
						<td>{{$index + 1}}</td>
						<td>{{ar.title}}</td>
						<td>{{ar.state ==='1'?'开启':'关闭'}}</td>
						<td>{{this.$formatDate(ar.createdAt, 'yyyy-MM-dd hh:mm')}}</td>
						<td><a>操作</a></td>

					</tr>
				</tbody>
			</table>
		</div>
		<div class="pagination">
			<page size="md" variant="primary" :total-rows="total" :current-page.sync="current" :per-page="limit"></page>
		</div>
	</div>
</template>
<script>
	import  page  from './../components/pagination';
	import './../../static/css/articlelist.scss';
	import { getArticles, getArticleCount } from './../service/article';
	export default{
		components:{
			page
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
		data(){
			return{
				articles:[],
				start:0,
				limit:10,
				currentStart:0,
				show:false,
				current:1
			};
		},
		attached(){
			const data = {};
			data.start = this.start;
			data.limit = this.limit;
			this.getArticles(data);
			this.getArticleCount();
		},
		watch:{
			datas(){
				this.articles = this.$deepCopy(this.datas);
			},
			current(val){
				const data = {};
				data.start = (val- 1) * this.limit;
				data.limit = this.limit;
				this.getArticles(data);
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
    	}

    }
};
</script>

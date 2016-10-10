<!-- 时间轴 -->
<template>
	<div class="timeline">
		<div class="top">
			<div class="tip">
				共{{total}}篇文章
			</div>
			<div class="search">
				<input type="text" v-model="search">
			</div>
		</div>
		<div class="main">
			<ul>
				<li v-for="article in articles">
					<div class="timeline-list">
						<div class="timeline-circle">
						</div>
						<div class="timeline-createtime">
							{{this.$formatDate(article.createdAt, 'yyyy-MM-dd')}}
						</div>
						<label>{{article.title}}</label>
					</div>
				</li>
			</ul>
		</div>
		<div class="bov">
			<a @click="loadMore" v-if="articles.length < total">查看更多</a>
		</div>
		<!-- <input type="file" v-model="file" accept="image/gif, image/jpeg, image/png" id="fileinput"> -->
	</div>
</template>
<script>
	import './../../static/css/timeline.scss';
	import { getArticles, getArticleCount } from './../service/article';
	export default{
		components:{
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
				file:''
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
			},
			file(){
				var uploadFormDom = document.getElementById('fileinput');
				var file = uploadFormDom.files[0];
      			var name = file.name;
				var avFile = new AV.File(name, file);
     			avFile.save().then(function(obj) {
        			// 数据保存成功
        			console.log(obj.url(), 'success+++++++++++++++++');
      			}, function(error) {
        			// 数据保存失败
        			console.log(error, 'error-------------');
      			});
			}
		},
		computed:{
		},
		methods:{
			// 加载更多
			loadMore(){
				this.currentStart ++;
				this.start = this.currentStart * this.limit;
				const data = {};
				data.start = this.start;
				data.limit = this.limit;
				this.getArticles(data);
			},
		}
	};
</script>
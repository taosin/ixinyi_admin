<!-- 时间轴 -->
<template>
	<div class="timeline">
		<div class="top">
			<div class="tip">
				共{{total}}篇文章
			</div>
			<div class="search">
				<input type="text" v-model="search" @blur="doSearch">
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
						<a @click="goDetail(article.id, $index, article.createdAt)"><label>{{article.title}}</label></a>
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
	import { getArticles, getArticleCount, searchArticles } from './../service/article';
	export default{
		components:{
		},
		vuex:{
			getters:{
				datas: state => state.articles,
				total:state => state.articleCount,
				searchResult:state => state.serArticleResult,
			},
			actions:{
				getArticles,
				getArticleCount,
				searchArticles
			}
		},
		data(){
			return{
				articles:[],
				start:0,
				limit:10,  
				currentStart:0,
				file:'',
				search:''
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
			},
			searchResult(val){
				if(val){
					this.articles = val;
				}
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
			// 跳转到详情页
			goDetail(id, index, date){
				const url = '/index/blog/'+ index + '/' + id +'/'+this.$formatDate(date, 'yyyy-MM-dd');
				window.router.go({
					path:url
				});
				this.$h5setValue('sin-index_tx', index+'');
			},
			doSearch(){
				if(this.search){
					const data = {};
					data.start = this.start;
					data.limit = this.limit;
					data.title = this.search;
					this.searchArticles(data);
				}
			}
		}
	};
</script>
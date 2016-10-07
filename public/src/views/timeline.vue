<!-- 时间轴 -->
<template>
	<div class="timeline">
		<div class="top">
			<div class="tip">
				共{{total}}篇文章
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
	</div>
</template>
<script>
	import './../../static/css/timeline.scss';
	// import { Timeline, TimelineItem } from 'iview';
	import { getArticles, getArticleCount } from './../service/article';
	export default{
		components:{
			// Timeline,
			// TimelineItem
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
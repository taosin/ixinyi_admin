<!-- 阅读轨迹 -->
<template>
	<section class="timeline-1" style="margin-top:80px">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
					<p class="lead">
						每天看的，并觉得值得分享的，保留的文章。
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">

					<div v-for="time in datetime" class="timeline-event">
						<div v-if="$index%2===0" class="col-sm-6 col-md-push-6" style="text-align:left">
							<h2>{{time}}</h2>
							<p>晴转雨</p>
						</div>
						<div v-else class="col-sm-6">
							<h2>{{time}}</h2>
							<p>晴转雨</p>
						</div>
						<div class="middle">
							<i class="glyphicon {{$index%2 === 0?'glyphicon-hand-left':'glyphicon-hand-right'}}"></i>
							<div class="vertical-line"></div>
						</div>
						<div v-if="$index%2===0" class="col-sm-6 col-md-pull-6" >
							<p>
								<ul>
									<li v-for="read in historys[time]"><a href="{{read.url}}" target="_blank">{{read.title}}</a></li>
								</ul>
							</p>
						</div>
						<div v-else class="col-sm-6" style="text-align:left">
							<p>
								<ul>
									<li v-for="read in historys[time]"><a href="{{read.url}}" target="_blank">{{read.title}}</a></li>
								</ul>
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
</template>
<script>
// import * from './../../components/*';
import { getReadInfos } from './../service/article.js';
export default{
    components:{
    },
    vuex:{
    	getters:{
    		historys: state => state.readLineDatas,
    		datetime: state => state.readLineDates
    	},
    	actions:{
    		getReadInfos
    	}
    },
    data(){
        return{
         };
    },
    attached(){
    	this.getReadInfos();
    },
    watch:{
    	historys(){
    		// debugger;
    	}
    },
    computed:{
   },
    methods:{
    }
};
</script>
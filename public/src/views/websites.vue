<!-- 博客录页面 -->
<template>
	<div class="websites">
		<div class="title">
			<h1>博客录</h1>
			<p>在此可留下您的大名和博客地址</p>
		</div>
		<div class="main">
			<div class="list" v-for="data in datas">
				<img :src="data.img">
				<div class="name">
					<label>{{data.name}}</label>
				</div>
				<div class="url">
					<a>{{data.url}}</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// import * from './../../components/*';
import './../../static/css/websites.scss';
export default{
	components:{
        // *
    },
    data(){
    	return{
    		datas:[
    		{ name:'令狐冲', url:'http://www.baidu.com', img:'' },
    		{ name:'任我行', url:'http://www.baidu.com', img:'' },
    		{ name:'风清扬', url:'http://www.baidu.com', img:'' },
    		{ name:'张无忌', url:'http://www.baidu.com', img:'' },
    		{ name:'乔峰', url:'http://www.baidu.com', img:'' },
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
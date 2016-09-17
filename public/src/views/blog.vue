<!-- 文章详情页 -->
<template>
	<div class="blog">
		<div class="top">
			<div class="title">
				<h3><a>钢铁是怎样炼成的</a></h3>
			</div>
			<div class="date">
				<span>发布于：2016-12-20</span>｜
				<span>标签：vue</span>
			</div>
		</div>
		<div class="main">
			<p>leadcloud数据存储开发指南(四)－Js篇</p>
			<p>保存对象</p>
			<p>AV.Object 对象在保存时可以设置选项来快捷完成关联操作，可用的选项属性有：</p>
			<p>选项	类型	说明</p>
			<p>fetchWhenSave	BOOL	对象成功保存后，自动返回该对象在云端的最新数据。用途请参考 更新计数器</p>
			<p>query	AV.Query	当 query 中的条件满足后对象才能成功保存，否则放弃保存，并返回错误码 305。</p>
			<p>leadcloud数据存储开发指南(四)－Js篇</p>
			<p>保存对象</p>
			<p>AV.Object 对象在保存时可以设置选项来快捷完成关联操作，可用的选项属性有：</p>
			<p>选项	类型	说明</p>
			<p>fetchWhenSave	BOOL	对象成功保存后，自动返回该对象在云端的最新数据。用途请参考 更新计数器</p>
			<p>query	AV.Query	当 query 中的条件满足后对象才能成功保存，否则放弃保存，并返回错误码 305。</p>
		</div>
		<div class="bov">
			<div class="pre">
				<a>上一个文章</a>
			</div>
			<div class="next">
				<a>下一个文章</a>
			</div>
		</div>
	</div>
</template>
<script>
	import './../../static/css/blogs.scss';
// import * from './../../components/*';
	import { getArticles } from './../service/article';
export default{
	components:{
        // *
    },
    data(){
    	return{
    	};
    },
    vuex:{
    	getters:{
    	}
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
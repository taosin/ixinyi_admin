<!-- 顶部菜单 -->
<template>
	<div class="menu">
		<div class="logo">
			<a href="#"><img :src="logo" title="Sin"></a>
		</div>
		<div class="main">
			<ul>
				<li><a href="#/index/blogs">Home</a></li>
				<li><a href="#/index/techs">技术</a></li>
				<!-- <li><a href="#/index/life">生活</a></li> -->
				<li><a>关于我</a></li>
				<!-- <li><a>时间轴</a></li> -->
			</ul>
		</div>
	</div>
</template>
<script>
	import './../../static/css/menu.scss';
	export default{
		data(){
			return{
				logo:'http://blog.xinsay.cn/luffy.jpg'
			};
		}
	};
</script>
<!-- 首页 -->
<template>
	<div>
		<toplayout>
			<div slot="top_menu" >
				<!-- <menu></menu> -->
			</div>
			<div slot="top_container">
				<router-view class="view" transition="expand" transition-mode="out-in"></router-view>
			</div>
		</toplayout>
	</div>
</template>
<script>
	import toplayout from './../components/toplayout.vue';
	import menu from './menu.vue';
	import './../../static/css/index.scss';
	export default{
		components:{
			toplayout,
			menu
		},
		vuex: {
			getters: {
			},
			actions: {
			}
		},
		data(){
			return{
			};
		},
		created(){
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
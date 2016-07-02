<!-- 首页 -->
<template>
	<div>
		<leftlayout>
			<div slot="left_menu" >
				<leftmenu :data="menus"></leftmenu>
			</div>
			<div slot="left_container">
				<router-view class="view" transition="expand" transition-mode="out-in"></router-view>
			</div>
		</leftlayout>
	</div>
</template>
<script>
	import leftlayout from './../components/leftlayout.vue';
	import leftmenu from './../components/leftmenu.vue';
	import { getLeftMenus } from './../service/menu.js';
	export default{
		components:{
			leftlayout,
			leftmenu,
		},
		vuex: {
			getters: {
				menus: state => state.leftmenus
			},
			actions: {
				getLeftMenus
			}
		},
		data(){
			return{
			};
		},
		created(){
			this.getLeftMenus();
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
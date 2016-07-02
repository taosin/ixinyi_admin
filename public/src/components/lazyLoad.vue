<template>
<div class="if">
	<img src={{srcq}} v-el:msg>
</div>
</template>
<script type="text/javascript">
	export default{
		props:['src', 's'],
		data(){
			return {
				srcq:'http://placeholder.qiniudn.com/68x68'
			};
		},
		ready(){

		},
		created(){
			this.load();
			window.onscroll = () => {
				this.load();
			};
			window.onresize = () => {
				this.load();
			};

		},
		methods:{
			load(){
				const self = this;
				const top = {};
				top['topw'+self.s] = document.documentElement.clientHeight;
				top['topq'+self.s] = document.querySelector('img').getBoundingClientRect().top;
				if (top['topq'+self.s] < (20+top['topw'+self.s])){
					this.srcq = this.src;
				}
			}
		}
	};
</script>
<style type="text/css">
	.if{
		min-height:600px;
	}
</style>
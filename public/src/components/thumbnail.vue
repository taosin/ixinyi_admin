<template>
	<div class="thumbnail thumbnailAll">
	  	<div v-for="t in thumbnailImg" v-bind:style="sty">
	  	   <img src={{t}} v-on:click="xuan($index)">
	  	</div>
	</div>
	<div class="carouselqqqT" v-show="isCa" v-on:click="isCaF">
	</div>
		<div class='carouselqqq' v-show="isCa">
			<carousel autoplay="2" v-bind:exhibition='exhibition'>
				<div v-for="t in thumbnailImg">
			  	   <img src={{t}} >
			  	</div>
			</carousel>
		</div>
</template>
<script>
	import carousel from './carousel.vue';
	export default{
		props:['row'],
		components:{
			carousel
		},
		vuex:{
			getters:{
				thumbnailImg: state => state.thumbnailImg
			}
		},
		data(){
			return {
				sty:{ width:'33.333333%' },
				exhibition:0,
				isCa:false
			};
		},
		ready(){
			const self = this;
			if (self.row){
				self.sty.width = (100/self.row)+'%';
			}
		},
		methods:{
			xuan(i){
				this.exhibition = i;
				this.isCa = true;
			},
			isCaF(){
				this.isCa = !this.isCa;
			}
		}
	};
</script>
<style>
   .thumbnail > div{
   		display: inline-block;
   		padding: 5px;
   		box-sizing: border-box;
   }
   .thumbnail > div > img{
   		width: 100%
   }
   .thumbnailAll{
   		text-align: left;
   }
   .carouselqqqT{
	   	 position: fixed;
	   	 top:0;
	   	 left: 0;
	   	 right: 0;
	   	 bottom: 0;
	   	 background: rgba(0,0,0,0.6);
   }
   .carouselqqq{
   		position: fixed;
	   	top:200px;
	   	left: 0;
	   	right: 0; 
   }
</style>
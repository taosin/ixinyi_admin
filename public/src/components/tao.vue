<template>
	<div class="tao">
		<div class="taoQ" v-on:mouseover="taoOnmouseover"  v-on:mousemove="taoOnmousemove" v-on:mouseout="taoMouseout">
			<img src={{src}} v-on:click="taoQclick" id="img">
			<div class="taoQw" v-show="isMask" id="isMask">
			</div>
		</div>
	  	<div class="taoW">
	  		<div v-for="t in tao" class="taoWq" :class="{ 'xuanzhongQ': exhibition === $index }">
	  			<div v-on:mouseover="onmouseover($index)" >
	  				<img src={{t.thumbnailImg}} >
	  			</div>
	  		</div>
	  	</div>
	  	<div class="taoY" v-show="isMask">
			<img src={{src}} id="imgQ" class="taoYq" v-on:click="taoQclick">
		</div>
	</div>
	
	<div class="carouselqqqT" v-show="isCa" v-on:click="isCaF">
	</div>
	<div class='carouselqqq' v-show="isCa">
		<div class="carouselqqqQ">
			<carousel autoplay="2" v-bind:exhibition='exhibition'>
				<div v-for="t in tao">
			  	   <img src={{t.img}} >
			  	</div>
			</carousel>
		</div>
		<div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import carousel from './carousel.vue';
	export default{
		props:['zoomlevel'],
		components:{
			carousel
		},
		vuex:{
			getters:{
				tao: state => state.tao
			}
		},
		data(){
			return {
				src:null,
				exhibition:0,
				isCa:false,
				isMask:false, // 蒙板是否显示
				rectLeft:0, // 展示图片的位置 - left
				rectTop:0, // 展示图片的位置 - top
				rectRight:0, // 展示图片的位置 - right (相对 0,0定位)
				rectBottom:0, // 展示图片的位置 - bottom (相对 0,0定位)
				setLeft:0, // 图片相对上层div的 left
				setTop:0, // 图片相对上层div的 top
				setWidth:0, // 展示图片的宽度
				setHeight:0, // 展示图片的高度
				multiple:1, // 图片相对于80像素的倍数
				fsetWidth:0, // 放大图片的宽度
				fsetHeight:0, // 放大图片的高度
				half:0, // 放大倍数的一半
				realzoomlevel:0 // 记录最初放大系数
			};
		},
		ready(){
			this.src = this.tao[0].img;
			this.realzoomlevel = this.zoomlevel;
		},
		methods:{
			onmouseover(i){
				this.src = this.tao[i].img;
				this.exhibition = i;
			},
			taoQclick(){
				this.isCa = true;
			},
			isCaF(){
				this.isCa = false;
			},
			taoOnmouseover(event){
				// 鼠标移动至大图事件
				this.isMask = true;
				const dom = document.querySelector('#img');
				const domQ = document.querySelector('#imgQ');
				this.rectLeft = dom.getBoundingClientRect().left;
				this.rectTop = dom.getBoundingClientRect().top;
				this.rectRight = dom.getBoundingClientRect().right;
				this.rectBottom = dom.getBoundingClientRect().bottom;
				this.setLeft = dom.offsetLeft;
				this.setTop = dom.offsetTop;
				this.zoomlevel = this.realzoomlevel;
				this.setWidth = dom.offsetWidth;
				if (this.zoomlevel > this.setWidth){
					this.zoomlevel = this.setWidth;
				}
				this.setHeight = dom.offsetHeight;
				if (this.zoomlevel > this.setHeight){
					this.zoomlevel = this.setHeight;
				}
				document.querySelector('.taoQw').style.width = this.zoomlevel + 'px';
				document.querySelector('.taoQw').style.height = this.zoomlevel + 'px';
				this.half = this.zoomlevel/2;
				this.multiple = dom.offsetWidth/this.zoomlevel;
				domQ.style.width = 385*this.multiple+'px';
				this.fsetWidth = 385*this.multiple;
				this.fsetHeight = (this.setHeight/this.setWidth)*(385*this.multiple);
			},
			taoOnmousemove(event){
				// 鼠标在范围内移动事件
				const self = this;
				self.isMask = true;
				const pageX = event.pageX; // 鼠标位置（x）
				const pageY =event.pageY; // 鼠标位置（x）
				const dom = document.querySelector('#img'); // 图片
								// 处理 遮罩层
				let x = 0; // 遮罩层的位置X
				let y = 0; // 遮罩层的位置Y
				if ((pageX + this.half) >= self.rectRight){
					x = self.rectRight - self.rectLeft + self.setLeft - this.zoomlevel;
				} else if ((pageX - this.half) <= self.rectLeft){
					x = this.setLeft;
				} else {
					x = pageX - self.rectLeft + self.setLeft -this.half;
				}
				if ((pageY - this.half) <= self.rectTop){
					y = self.setTop;
				} else if ((pageY + this.half) >= self.rectBottom){
					y = this.rectBottom - this.rectTop + this.setTop - this.zoomlevel;
				} else {
					y = pageY - this.rectTop + this.setTop - this.half;
				}
				const domY = document.querySelector('#isMask'); // 遮罩层
				domY.style.webkitTransform = 'translate('+x+'px,'+y+'px)';
				const styX = (self.setLeft - x) *this.multiple;
				const styY = (self.setTop - y) *this.multiple;
				const sddX = -((x - self.setLeft)/self.setWidth) * (385*this.multiple);
				const sddY = -((y - self.setTop)/self.setHeight) * this.fsetHeight;
				console.log('x', x);
				console.log('y', y);
				console.log('setTop', self.setTop);
				console.log('setLeft', self.setLeft);
				console.log('styX', styX);
				console.log('styY', styY);
				console.log('sddX', sddX);
				document.querySelector('#imgQ').style.webkitTransform = 'translate('+sddX+'px, '+sddY+'px)';
			},
			taoMouseout(){
				this.isMask = false;
			}
		}
	};
</script>
<style type="text/css">
	.tao{
		width: 100%;
		position: relative;
	}
	.taoQ{
		width: 100%;
		height: 300px;
		line-height: 293px;
		text-align: center;
		border: 1px solid #ccc;
		padding: 2px;
		box-sizing:box-sizing;
		position: relative;
	}
	.taoQ img{
		max-width: 100%;
		max-height:100%;
		vertical-align: middle;
		
	}
	.taoQw{
		width: 80px;
		height:80px;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.6);
	}
	.taoW{
		width: 100%;
		height: 54px;
		margin-top: 20px

	}
	.taoW > div{
		width: 16.66666%;
		box-sizing:box-sizing;
		padding: 0 3px;
		float: left;
		height: 100%;
	}
	.taoW > div > div{
		width: 100%;
		height:100%;
		line-height:54px;
	}
	.taoW > div > div > img{
		max-width: 100%;
		max-height:100%;
		vertical-align: middle;
	}
	.xuanzhongQ > div > img{
		border: 1px solid #000;
		box-sizing:box-sizing;
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
	   	left: 10%;
	   	right: 10%; 
   }
   .carouselqqqQ{
   		width: 80%;
   		float:left;
   }
   .carouselqqqW{
   		width: 18%;
   		float: right;
   }
   .taoY{
		position: absolute;
		top:0;
		left: 100%;
		width: 385px;
		height: 385px;
		overflow: hidden;
		z-index: 4;
	}
	.taoYq{
		max-width: none;
	}


</style>
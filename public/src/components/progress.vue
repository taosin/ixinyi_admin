<template>
 	<div class="components">
 		<div class="componentsQ">
 			<div  v-for='s in step' v-bind:style="{width:width+'%'}">
 				<img v-bind:src="s.img">{{s.text}}
 			</div>
 		</div>
 		<div class="c">
 		</div>
 		<div class="componentsW">
 			<div class="componentsWQ" v-bind:style="{width:zwidth+'%'}">
 			</div>
 			<div class="c">
 			</div>
 			<div class="componentsWW" v-bind:class="{componentsWWE:complete > $index }" v-for='s in step' v-bind:style="{width:width+'%'}">
 				<div class="componentsQQ">
 					<div class="componentsQQw">
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
</template>
<script type="text/javascript">
	export default{
		props:['step', 'complete'],
		data(){
			return {
				width:0,
				zwidth:0
			};
		},
		ready(){
			this.width = (100/this.step.length);
			this.zwidth = this.width * this.complete;
		},
		watch:{
			complete(a, b){
				this.zwidth = this.width * a;
			}
		}
	};
</script>
<style type="text/css">
	.componentsQ{
		margin-bottom: 10px;	
		float: left;
		width: 100%
	}
	.componentsQ img{
		max-height: 30px;
		margin-right: 10px;
	}

	.components{
		width: 100%
	}
	.componentsW{
		width: 100%;
		height: 6px;
		background: #ccc
	}
	.componentsWQ{
		height: 100%;
		background: #2bb8aa;
		transition: width 0.5s;
		-moz-transition: width 0.5s;	/* Firefox 4 */
		-webkit-transition: width 0.5s;	/* Safari 和 Chrome */
		-o-transition: width 0.5s;
	}
	.componentsQ > div{
		float: left;
		text-align: center;
	}
	.c{
		clear: both;
	}
	.componentsQQ{
		margin: auto;
 		width: 20px;
 		height: 20px;
 		background: #fff;
	}
	.componentsWW{
		float: left;
		margin-top: -13px;
	}

	.componentsQQw{
		width: 14px;
		height:14px;
		border-radius: 50%;
		background: #ccc;
		margin:3px;
	}

	.componentsWWE .componentsQQw{
		background:#2bb8aa;
	}
</style>
<template>
	<div class="typeseQ" >
		<a class="typeset" title={{t.name}} v-for="t in typesetting" v-link="'shop'">
			<img src={{t.img}}>
			<div class="typesetName">
				<div class="typesetNameQ nowrap">
					<span class='typesetNameL'>商家</span>{{t.name}}
					<span class="typesetNameR" v-if="t.type=='1'">券</span> 
					<span class="typesetNameR" v-else>套餐</span>
				</div>
				<div class="typesetNameW">
					<div class="xg-producCommentQqw">
						<div :style="{ width: (t.score/5)*100 + '%' }">
						</div> 
					</div>
					<span>{{t.commentsNumber}}人评论</span>
					<span class="xg-r">
						{{t.classification}}&nbsp;&nbsp;{{t.address}}
					</span>	
				</div>
			</div>
			<div class="typesetlowestPrice">
				<span class='xg-co'><span>¥{{t.lowestPrice}}</span></span>&nbsp;起  <span class="xg-r">人均&nbsp;¥{{t.perCapita}}</span>
			</div>
		</a>
	</div>
</template>
<script type="text/javascript">
	export default{
		vuex:{
			getters:{
				typesetting: state => state.typesetting
			}
		},
	};
</script>
<style type="text/css">
	.typeseQ > a{
		float: left;
		width: 47%;
		border: 1px solid rgb(238, 238, 238); 
		margin-bottom: 15px

	}
	.typeseQ > a:hover{
		border-color: #2BB8AA
	}
	.typeseQ > a:nth-child(2n){
		margin-left:6%; 
	}
	.typeseQ img{
		max-width: 100%
	}
	.typesetName{
		padding: 6px 8px 13px;
	}
	.typesetNameQ{
		position: relative;
		margin-bottom: 15px;
    	height: 24px;
    	line-height: 24px;
    	padding: 0 40px;
    	color: rgb(102, 102, 102);

	}
	.typesetNameL {
		position: absolute;
	    left: 0;
	    background: #9E9E9E;
	    color: #fff;
	    height: 16px;
	    font-size: 12px;
	    padding: 0 4px;
	    top: 4px;
	    line-height: 16px;
	}
	.typesetNameR{
		position: absolute;
	    right: 0;
	    float: right;
	    height: 16px;
	    padding: 0 4px;
	    line-height: 16px;
	    top: 4px;
	    background: #2BB8AA;
	    font-size: 12px;
	    color: #fff;
	    text-align: center;
	}
	.typesetName .xg-producCommentQqw{
		float: left;
	    background-size: 12px;
	    height: 12px;
	    width: 60px;
	}
	.typesetName .xg-producCommentQqw > div{
		background-size: 12px;
		height: 12px;
	}
	.typesetNameW{
	    font-size: 12px;
    	color: rgb(153, 153, 153);
    	line-height: 14px;
	}
	.typesetlowestPrice{
		height: 44px;
	    line-height: 44px;
	    font-size: 12px;
	    border-top: 1px dotted rgb(221, 221, 221);
	    padding: 0px 20px 0px 18px;
	    background: rgb(249, 249, 249);
	    color: rgb(153, 153, 153);
	}
	.typesetlowestPrice > span > span{
		font-size: 16px;
	}
</style>
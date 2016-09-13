<!-- 技术文章查看详情页面 -->
<template>
	<div class="techdetail">
		<div class="techdetail-top">
			
		</div>
		<div class="techdetail-main">
			<div class="top">
				<div class="title">
					<h1>钢铁是怎样炼成的</h1>
				</div>
				<div class="createtime">
					<span>发布时间：2016-03-12</span>
				</div>
			</div>
			<div class="content" v-html="">
			</div>
		</div>
	</div>
</template>
<script>
// import * from './../../components/*';
import './../../static/css/techs.scss';
export default{
	components:{
        // *
    },
    data(){
    	return{
    		content:''
    	};
    },
    ready(){
    },
    watch:{
    },
    computed:{
    },
    methods:{

    	// 查看全文
    	goDetail(id){
    		alert(id);
    	}
    }
};
</script>
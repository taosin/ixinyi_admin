<!-- 生活 -->
<template>
	<div class="life">
		<div class="top">
			
		</div>
	</div>
</template>
<script>
// import upload from './../components/qiniu_upload.vue';
import './../../static/css/life.scss';
export default{
    components:{
        // upload
    },
    data(){
        return{
        	uploadurl:'',
        	categories:[
        	{ name:'日记', id:'1' },
        	{ name:'随想', id:'2' },
        	{ name:'趣闻', id:'3' },
        	{ name:'转载', id:'4' },
        	]
         };
    },
    ready(){
    },
    watch:{
    	uploadurl(){
    	}
    },
    computed:{
   },
    methods:{
    }
};
</script>
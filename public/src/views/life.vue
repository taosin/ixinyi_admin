<!-- 生活 -->
<template>
	<div class="life">
		生活
		<upload :uploadurl.sync="uploadurl"></upload>
	</div>
</template>
<script>
import upload from './../components/qiniu_upload.vue';
import './../../static/css/life.scss';
export default{
    components:{
        upload
    },
    data(){
        return{
        	uploadurl:''
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
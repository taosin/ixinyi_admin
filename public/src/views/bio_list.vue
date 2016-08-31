<template>
	<div class="bio_lists">
		<div class="bios-title">
			<h3>标签</h3>
		</div>
		<div class="bios-list" v-for="bio in bios | filterBy '2' in '_serverData.iscate'">
			<a>{{bio._serverData.name}}</a>	
		</div>
        <!-- <mark-down :content.sync="content"></mark-down> -->
	</div>
</template>
<script>
import { queryCates } from './../service/add';
// import markDown  from 'vue-s-markdown/src/markdown/index';
export default{
    components:{
        markDown
    },
    data(){
        return{
        	bios:[],
            content:''
         };
    },
    vuex: {
        getters: {
            data: state => state.result
        },
        actions: {
            queryCates
        }
    },
    created(){
            this.queryCates();
    },
    ready(){
    },
    watch:{
        data(){
            this.bios = this.data;
        }
    },
    computed:{
   },
    methods:{
    }
};
</script>
<style type="text/css">
	.bios-title{
		text-align: center;
	}
	.bios-list{
		margin: 10px;
		/*border-bottom: 1px solid blue;*/
	}
	.bios-list a{
		color: gray;
		text-decoration: underline
	}
</style>
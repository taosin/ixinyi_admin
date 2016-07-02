<template>
	<div class="bio_lists">
		<div class="bio-title">
			<h3>目前共计{{bios.length}}个标签</h3>
		</div>
		<div class="bio-list" v-for="bio in bios">
			<a>{{bio.text}}</a>	
		</div>
	</div>
</template>
<script>
export default{
    components:{
    },
    data(){
        return{
        	bios:[
        		{ text:'Charles', id:'1111', url:'22222' },
        		{ text:'HTML', id:'1111', url:'22222' },
        		{ text:'ES6', id:'1111', url:'22222' },
        		{ text:'JavaScript', id:'1111', url:'22222' },
        		{ text:'vue', id:'1111', url:'22222' }
        	]
         };
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
<style type="text/css">
	.bio-title{
		text-align: center;
	}
	.bio-list{
		margin: 10px;
		/*border-bottom: 1px solid blue;*/
	}
	.bio-list a{
		color: gray;
		text-decoration: underline
	}
</style>
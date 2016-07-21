<template>
	<div class="photos-container">
		<div class="photos-header">
			
		</div>
		<div class="photo-list" v-for="photo in photos">
            <div class="photo-main">
                <img v-bind:src="photo.img">
                <p>{{photo.title}}</p>
                </div>
        </div>
	</div>
</template>
<script>
    export default{
        components:{
        },
        data(){
            return{
                photos:[
                { img:'http://7xrvyq.com1.z0.glb.clouddn.com/wantai.jpg', title:'外滩', id:'1', desc:'我在外滩' },
                { img:'http://7xrvyq.com1.z0.glb.clouddn.com/wantai.jpg', title:'外滩', id:'1', desc:'我在外滩' },
                { img:'http://7xrvyq.com1.z0.glb.clouddn.com/wantai.jpg', title:'外滩', id:'1', desc:'我在外滩' }
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
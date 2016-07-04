<template>
    <div class="photos-lists">
        <div class="photo-header">
            目前共有{{photos.length}}个相册
        </div>
        <div class="photo-list" v-for="photo in photos" @click="toPhotos">
            <div class="photo-main"> 
                <img v-bind:src="photo.img">
                <p>{{photo.title}}</p>
            </div>
        </div>
        <div class="photo-footer"> 

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
            toPhotos(){
               const url = './photos';
               window.router.go({
                 path: url
             }); 
           }
       }
   };
</script>
<style type="text/css">
    .photo-header{
        text-align: center;
        margin: 20px auto;
    }
    .photo-main img{
        width: 200px;
        margin-bottom: 10px;

    }
    .photo-list{
        width: 220px;
        float: left;
        text-align: center;
        margin:0 10px;
    }
    .photo-list:hover{
        opacity: 0.5;
    }
</style>
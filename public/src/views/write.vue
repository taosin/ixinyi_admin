<template>
    <div>
        <div class="write-left">
            <textarea class="write-textarea" v-model="content" @keyup="contentTrans"></textarea>
        </div>
        <div class="write-right">
            {{htmlContent}}
        </div>
    </div>
</template>
<script>
// import * from './../../components/*';
export default{
    components:{
        // *
    },
    data(){
        return{
            content:null,
            htmlContent:null
        };
    },
    ready(){
    },
    watch:{

       
    },
    computed:{
    },
    methods:{
         // mackdown转换为html
        contentTrans(){
            const text = this.content;
            const converter = new Showdown.converter();
            const html = converter.makeHtml(text);
            this.htmlContent = html;
        }
    }
};
</script>
<style type="text/css">
    .write-left{
        width: 500px;
        height: 600px;
        float: left;
        border: 1px solid #333333;
        overflow: auto;
    }
    .write-textarea{
        width: 100%;
        height: 100%;
        resize: none;
    }
    .write-right{
        float: right;
        width: 500px;
        height: 600px;
        border: 1px solid #333333;
        overflow: auto;
    }
</style>
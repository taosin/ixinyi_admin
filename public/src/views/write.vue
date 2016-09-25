<template>
    <div class="write">
        <div class="top">
            <input type="text" placeholder="请输入标题" v-model="title">
            <input type="text" placeholder="请输入标签" v-model="tag">
        </div>
        <div class="main">
            <Markdown :content.sync="content"></Markdown>
        </div>
        <div class="footer">
            <a class="publish" @click="publish">发布</a>
            <a class="reback" @click="reback">返回首页</a>
        </div>
    </div>
</template>
<script>
    import Markdown from 'vue-s-markdown/src/markdown/index';
    import { addArticle } from './../service/article';
    import './../../static/css/write.scss';
    export default{
        components:{
            Markdown
        },
        data(){
            return{
                content:'',
                title:'',
                tag:''
            };
        },
        ready(){
            document.title = '发表文章－－管理后台';
        },
        watch:{
            result(val){
            }
        },
        vuex: {
            getters: {
                result: state => state.addArticleResult
            },
            actions: {
                addArticle
            }
        },
        created(){
        },
        computed:{
        },
        methods:{
        // 发布文章
        publish(){
            if(!this.title || !this.tag || !this.content){
                return;
            }
            const converter = new showdown.Converter();
            const data = {};
            data.title = this.title;
            data.content = converter.makeHtml(this.content);
            data.tag = this.tag;
            data.state = '1';
            this.addArticle(data);
        },
        // 返回首页
        reback(){

        }
    }
};
</script>
<style type="text/css">

</style>
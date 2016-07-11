<template>
    <div>
        <div class="row">
            <div class="write-left col-lg-offset-1 col-lg-5 col-md-5 col-sm-5">
                <textarea class="write-textarea" v-model="content" @keyup="contentTrans"></textarea>
            </div>
            <div class="write-right col-lg-6 col-md-6 col-sm-6" id="write-right">
                <!-- {{htmlContent}} -->
            </div>
        </div>
        <div class="row">
            <div class="col-lg-offset-1 btn-row">
                <button class="btn btn-primary">提交</button>
                <button class="btn btn-warn">取消</button>
            </div>
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
        document.title = '发表文章－－管理后台';
    },
    watch:{


    },
    computed:{
    },
    methods:{
         // mackdown转换为html
         contentTrans(){
            const text = this.content;
            const converter = new showdown.Converter();
            const html = converter.makeHtml(text);
            this.htmlContent = html;
            document.getElementById('write-right').innerHTML = html;
        }
    }
};
</script>
<style type="text/css">
    .write-left{
        height: 600px;
        margin-top: 10px;
    }
    .write-textarea,
    .write-textarea:focus{
        width: 100%;
        height: 100%;
        resize: none;
        outline: none;
        overflow: auto;
    }
    .write-right{
        height: 600px;
        overflow: auto;
        margin-top: 10px;
        border-left: 1px solid;
    }
    .row{
        margin: 0px;
    }
    .btn-row{
        margin-top:10px;
    }
</style>
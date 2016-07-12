<template>
    <div>
        <div class="write-top">
            <div class="write-cate">
                <label>分类</label>
                <div class="write-cate-lists">
                    <div class="write-cate-list {{currentSelected === $index? 'active':''}}" v-for="list in lists">
                        <a @click="selectCate($index, list.id)">{{list.text}}</a>
                    </div>
                </div>
            </div>
        </div>
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
            htmlContent:null,
            lists:[
            { text:'Charles', id:'1111', url:'22222' },
            { text:'HTML', id:'1111', url:'22222' },
            { text:'ES6', id:'1111', url:'22222' },
            { text:'JavaScript', id:'1111', url:'22222' },
            { text:'vue', id:'1111', url:'22222' }
            ],
            currentSelected:1
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
        },
        selectCate(index, id){
            console.info(index+'----'+id);
            this.currentSelected = index;
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
    .write-top{
        /*height: 100px;*/
        margin: 30px 120px 0 120px;
    }
    .write-cate-lists{
        border: 1px solid;
        /*width: 300px;*/
        height: 50px;
        padding:10px;
    }
    .write-cate-list {
        float: left;
        margin: 0px 10px;
    }
    .active{
        background-color: #000000;
        padding:5px 10px 5px 10px;
        transition: padding-top 0.5s;
    }
    .active a{
        color: #ffffff;
    }
</style>
<template>
    <div>
        <div class="write-top">
            <div class="wtite-title">
                <input type="text" class="bio-input write-input" placeholder="标题">
            </div>
            <div class="write-cate">
                <label>分类</label>
                <div class="write-cate-lists">
                    <div class="write-cate-list {{currentSelected === $index? 'active':''}}" v-for="list in lists | filterBy '1' in '_serverData.iscate'">
                        <a @click="selectCate($index, list.id)">{{list._serverData.name}}</a>
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
                <button class="btn btn-login common-btn">提交</button>
                <button class="btn btn-cancel common-btn">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
// import * from './../../components/*';
import { queryCates } from './../service/add';
export default{
    components:{
        // *
    },
    data(){
        return{
            content:null,
            htmlContent:null,
            lists:[],
            currentSelected:1
        };
    },
    ready(){
        document.title = '发表文章－－管理后台';
    },
    watch:{
        data(){
            this.lists = this.data;
        }

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

</style>
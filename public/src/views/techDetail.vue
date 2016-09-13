<!-- 技术文章查看详情页面 -->
<template>
	<div class="techdetail">
		<div class="techdetail-top">
			
		</div>
		<div class="techdetail-main">
			<div class="top">
				<div class="title">
					<h1>钢铁是怎样炼成的</h1>
				</div>
				<div class="createtime">
					<span>发布时间：2016-03-12</span>
				</div>
				<div class="tags">
					<span>标签:</span>
					<a v-for="nav in navs">{{nav.name}}</a>
				</div>
			</div>
			<div class="content marked" v-html="content | marked">
			</div>
		</div>
	</div>
</template>
<script>
// import * from './../../components/*';
import './../../static/css/techs.scss';
const marked = require('./../../static/js/marked.min.js');
export default{
	components:{
        // *
    },
    data(){
    	return{
    		content:'<p>[demo](www.baidu.com)AV.Object 是 LeanStorage 对复杂对象的封装，每个 AV.Object 包含若干属性值对，也称键值对（key-value）。属性的值是与 JSON 格式兼容的数据。通过 REST API 保存对象需要将对象的数据通过 JSON 来编码。这个数据是无模式化的（Schema Free），这意味着你不需要提前标注每个对象上有哪些 key，你只需要随意设置 key-value 对就可以，云端会保存它。</p>',
    		navs:[
    		{ name:'javascript', id:'1' },
    		{ name:'css', id:'2' },
    		{ name:'html', id:'3' },
    		{ name:'adobe', id:'4' },
    		{ name:'node', id:'5' },
    		{ name:'vue', id:'6' }
    		],
    	};
    },
    filters: {
    	marked: marked
    },
    ready(){
    },
    watch:{
    },
    computed:{
    },
    methods:{

    	// 查看全文
    	goDetail(id){
    		alert(id);
    	}
    }
};
</script>
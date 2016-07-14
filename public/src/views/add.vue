<!-- 添加标签、分类 -->
<template>
	<div class="row">
		<div class="col-lg-3 col-md-3 col-sm-3 add-content">
			<div class="bio-title">
				分类
			</div>
			<div v-for="bio in bios | filterBy '1' in '_serverData.iscate' " class="bio-item">
				{{bio._serverData.name}}
			</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 add-content">
			<div class="bio-title">
				标签
			</div>
			<div v-for="bio in bios | filterBy '2' in '_serverData.iscate' " class="bio-item">
				{{bio._serverData.name}}
			</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 add-content">
			<div class="bio-title">
				添加
			</div>
			<div class="bio-add">
				<div class="bio-add-item {{current == '1'?'current':''}}" @click="selectCate('1')">分类</div>
				<div class="bio-add-item {{current == '2'?'current':''}}" @click="selectCate('2')">标签</div>
			</div>
			<div class="bio-add">
				<span>名称</span>
				<input type="text" class="bio-input" v-model="name">
			</div>
			<div class="bio-add">
				<a class="add-bio" @click="handlerAdd">提交</a>
			</div>
		</div>
		<!-- <div class="col-lg-3 col-md-3 col-sm-3 add-content">
			<div class="bio-title">
				分类
			</div>
			<div v-for="bio in bios" class="bio-item">
				{{bio.text}}
			</div>
		</div> -->
	</div>
</template>
<script>
	import { addCate, queryCates } from './../service/add';
	export default{
		components:{
		},
		data(){
			return{
				bios:[],
				current:'1',
				name:null
			};
		},
		ready(){
		},
		vuex: {
			getters: {
				result: state => state.addResult,
				data: state => state.result
			},
			actions: {
				addCate,
				queryCates
			}
		},
		created(){
			this.queryCates();
		},
		watch: {
			result () {
				if (this.result) {
					this.queryCates();
					this.name = null;
				}
			},
			data(){
				this.bios = this.data;
			}
		},
		computed:{
		},
		methods:{
			selectCate(index){
				this.current = index;
			},
			handlerAdd(){
				if(this.name){
					const data = [];
					data.name = this.name;
					data.iscate = this.current;
					data.state = '1';
					data.op = this.$h5getValue('username');
					this.addCate(data);
				}
			}
		}
	};
</script>
<style>
	.add-bio{
		background-color: #000000;
		color: #ffffff;
		padding:5px 20px;
	}
	.add-bio:hover{
		background-color: #262520;
		color: #ffffff;
	}
	.bio-input{
		border: none;
		border-bottom: 1px solid;
		background: none;
	}
	.bio-input:focus{
		border-bottom: 2px solid;
		outline: none;
	}
</style>
<!-- 添加标签、分类 -->
<template>
	<div class="row">
		<div class="col-lg-3 col-md-3 col-sm-3 add-content">
			<div class="bio-title">
				分类
			</div>
			<div v-for="bio in bios" class="bio-item">
				{{bio.text}}
			</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 add-content">
			<div class="bio-title">
				标签
			</div>
			<div v-for="bio in bios" class="bio-item">
				{{bio.text}}
			</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 add-content">
			<div class="bio-title">
				添加
			</div>
			<div class="bio-add">
				<div class="bio-add-item {{current == 1?'current':''}}" @click="selectCate(1)">分类</div>
				<div class="bio-add-item {{current == 2?'current':''}}" @click="selectCate(2)">标签</div>
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
	export default{
		components:{
		},
		data(){
			return{
				bios:[
				{ text:'哈哈哈', id:'1', state:'1' },
				{ text:'大大大', id:'2', state:'1' },
				{ text:'服务3', id:'3', state:'1' },
				{ text:'大大啊等', id:'4', state:'1' },
				],
				current:1
			};
		},
		ready(){
		},
		watch:{
		},
		computed:{
		},
		methods:{
			selectCate(index){
				this.current = index;
			},
			handlerAdd(){
				if(this.name){
					const Cate = AV.Object.extend('Cates');
					const addCate = new Cate();
					addCate.set('name', this.name);
					addCate.set('sate', 1);
					addCate.set('type', this.current);
					addCate.save().then(function(result){
						alert('success');
					}, function(error){
						console.log(error);
					});
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
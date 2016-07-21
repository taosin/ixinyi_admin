<template>
	<div>
		<div class="sort">
			<div>
				默认
			</div>
			<div v-for="s in sort">
				{{s.text}}
				<i class='glyphicon' :class="{ 'glyphicon-chevron-up':s.type == 1,'glyphicon-chevron-down':s.type == 2}">
				</i>
			</div>
		</div>
		<div class="filter">
			<div v-for ='f in filter'>
				<input type="checkbox" id="mike" value={{f}} v-model="filters">&nbsp;{{f}}
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		vuex:{
			getters:{
				sort: state => state.sort,
				filter:state => state.filter
			}
		},
		data(){
			return {
				filters:[]
			};
		}
	};
</script>
<style type="text/css">
	.sort > div{
		float: left;
		line-height: 29px;
		color: #333;
		font-size: 12px;
		padding: 0 12px;
		border-right:1px solid #eee;
	}
	.filter > div{
		float: left;
		line-height: 29px;
		color: #333;
		font-size: 12px;
		padding: 0 12px;
		border-left:1px solid #eee;	
	}
</style>
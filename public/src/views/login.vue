<template>
	<div>
		
		<div class="login-container">
			<div class="login-input">
				<mdinput :value.sync="username">
					<label slot="input-lable">Account</label>
				</mdinput>
			</div>
			<div class="login-input">
				<mdinput :value.sync="password">
					<label slot="input-lable">Password</label>
				</mdinput>
			</div>
			<div class="login-input">
				<button class="btn btn-primary">登录</button>
				<button class="btn btn-warn">取消</button>
			</div>
		</div>
	</div>
</template>
<script>
	import mdinput from './../components/form/input.vue';
	export default{
		components:{
			mdinput
		},
		data(){
			return{
				username: null,
				password: null
			};
		},
		ready(){
		},
		watch:{
		},
		computed:{
		},
		methods:{
		}
	};
</script>
<style type="text/css">
	.login-container{
		/*text-align: center;*/
		margin:150px auto;
		width: 300px;
		height: 300px;
		border:1px solid #000000;
		padding:60px;
		border-radius: 3px;
	}
	.login-input{
		width: 100%;
		height: 80px;
		float: left;
	}
</style>
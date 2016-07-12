<template>
	<div>
		
		<div class="login-container">
			<div class="login-input">
				<mdinput :value.sync="username">
					<label slot="input-lable">Account</label>
				</mdinput>
			</div>
			<div class="login-input">
				<mdinput :value.sync="password" @keyup.enter="handlerLogin">
					<label slot="input-lable">Password</label>
				</mdinput>
			</div>
			<div class="login-btn">
				<button class="btn btn-login common-btn" @click="handlerLogin">登录</button>
				<button class="btn btn-cancel common-btn">取消</button>
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
			document.title = '登录－－管理后台';
		},
		watch:{
		},
		computed:{
		},
		methods:{
			handlerLogin(){
				// if(this.username && this.password){
				// 	console.info('login success');
				// }
				alert(111);
			}
		}
	};
</script>
<style type="text/css">
	.login-container{
		/*text-align: center;*/
		margin:150px auto;
		width: 300px;
		height: 350px;
		border:1px solid #000000;
		padding:60px;
		border-radius: 3px;
	}
	.login-input{
		width: 100%;
		height: 80px;
		float: left;
		padding: 30px 0;
	}
	.login-btn{
		width: 100%;
		height: 80px;
		float: left;
		margin-top: 60px;
		text-align: center;
	}
	.common-btn{
		outline: none;
		border-radius: 0;
		padding: 5px 21px;
	}
	.common-btn:hover,
	.common-btn:focus,
	.common-btn:active{
		outline: none;
		border-radius: 0;
		padding: 5px 21px;
		background-color: #000000;
		color: #ffffff;
	}
	.btn-login{
		background: #ffffff;
		color: #000000;
	}
</style>
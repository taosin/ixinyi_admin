<template>
	<div>
		<div class="switchName">
			<slot name="one">
			</slot>
		</div>
		<div class="switch">
	  		<slot name="two">
	  		</slot>
	  	</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['display', 'customclass'],
		data(){
			return {
				title:[],
				content:[],
				classNames:[]
			};
		},
		ready(){
			const fY = document.querySelector('[slot="one"]');
			const zY = fY.children;
			this.title = zY;
			const fW = document.querySelector('[slot="two"]');
			const zW = fW.children;
			this.content = zW;
			const len = zY.length;
			if (this.display > len){
				this.display = len;
			}
			for (let i=0; i < len; i++){
				this.title[i].onclick = () => {
					this.sle(i);
				};
				this.classNames.push(this.title[i].className);
			}
			this.title[this.display].className = this.classNames[this.display] + ' '+this.customclass;
			this.content[this.display].style.display = 'block';
		},
		methods:{
			sle(i){
				this.display = i;
			}
		},
		watch:{
			display(a, b){
				this.title[b].className = this.classNames[b];
				this.title[a].className = this.classNames[a] + ' '+this.customclass;
				this.content[b].style.display = 'none';
				this.content[a].style.display = 'block';
			}
		}

	};
</script>
<style type="text/css">
	[slot="two"] > div{
		display: none;
	}
	.switchName {
		width: 100%
	}
	.switch {
		width: 100%
	}
</style>
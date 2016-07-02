<template>
<div>
	<div class="record" >
		<span>全部&nbsp;</span>
		<div v-for="r in record" i={{$index}}>
			<span v-for="r in r"> &nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp; 
				<span>{{r.text}}&nbsp; <span v-on:click="delet($index)">X</span></span>
			</span>
		</div>
	</div>
	<div class="xg-classification"  v-for="c in classif" v-if="c.content">
		<div class="xg-classificationHead">{{c.text}}:</div>
		<div class="xg-classificationContent" i = {{$index}}>
			<div class="xg-classificationx">
				全部
			</div>
			<div v-for='c in c.content' v-on:click="choice($index, $event)">
				{{c.text}}
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
	export default{
		vuex:{
			getters:{
				wclassification: state => state.wclassification,
			}
		},
		data(){
			return {
				classif:[],
				record:[]
			};
		},
		ready(){
			this.classif = JSON.parse(JSON.stringify(this.wclassification));
			this.classif.forEach((data) => {
				const a = [];
				this.record.push(a);
			});
			console.log('this.record', this.record);
		},
		methods:{
			choice(i, event){
				const upper = parseFloat(event.target.parentNode.getAttribute('i'));
				const da = {
					['i']:i,
					text:this.classif[upper].content[i].text
				};
				this.record[upper].push(da);
				this.classif[upper].content = this.classif[upper].content[i].content;
			},
			delet(i){
				const upper = parseFloat(event.target.parentNode.parentNode.parentNode.getAttribute('i'));
				const len = this.record[upper].length;
				this.record[upper].splice(i, (len-i));
				let content = JSON.parse(JSON.stringify(this.wclassification[upper].content));
				this.record[upper].forEach((data) => {
					content = content[data.i].content;
				});
				console.log('content', content);
				this.classif[upper].content = content;

			}
		}
	};
</script>
<style type="text/css">
	.xg-classification{
		padding: 10px 0;
		border-bottom: 1px dotted #ddd;
		float: left;
		clear: both;
		width: 100%
	}
	.xg-classificationHead{
		float: left;
		line-height: 23px;
		color: #333;
		font-size: 12px;
	}
	
	.xg-classificationContent > div{
		float: left;
	    padding: 3px 6px;
	    font-size: 12px;
	    margin: 1px 10px;
	    color: #666;
	    border-radius: 3px;

	}
	.xg-classificationContent > div:hover{
		color: #fff;
    	background-color: #2bb8aa;
	}
	.xg-classificationx{
		color: #fff!important;
    	background-color: #2bb8aa;	
	}
	.record{
		border-bottom: 1px dotted #ddd;
		font-size: 12px;
		width: 100%;
		float: left;
		line-height: 23px;
		padding: 10px 0;
	}
	.record > div{
		float: left;
	}
	.record > span{
		float: left;
	}
	.record > div > span{
		
    	font-size: 12px;
    	margin: 0px 3px;
	}
	.record > div > span > span{
		border:1px solid #ddd;
		padding: 3px 6px; 
	}
</style>
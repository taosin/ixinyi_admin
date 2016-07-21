<template>
<div class="view">
 <div class="row cardrow">

  <div class="col-md-3 col-sm-4 col-xs-12 cardinfo" v-for="card in data">
  	  <img :src="card.pic">
  	  <div>
  	  	   <h3>{{card.title}}</h3>
  	  	   <p>{{card.desc}}</p>
  	  </div>
  </div>
  
 </div>
</div>
</template>
<script>
 export default {
   props: ['data'],
   methods: {
     goto(){

     }
   }
 };

</script>
<style type="text/css">
.cardrow {
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 20px;
}
.row .cardinfo{
	padding: 12px;
}
.row .cardinfo img{
	width: 100%;
}
.row .cardinfo p{
  word-wrap: break-word;
}
</style>
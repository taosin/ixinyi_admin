<template>
	<div class="row">
		<div class="col-xs-12 col-sm-9 bg-left">
			<span class="text-white">© 2016 Hades.</span>
			<span class="text-white"><a href="#">hi@iamhades.com</a></span>
			<span class="text-white"></span>
			<span class="text-white">上海中山公园</span>
		</div>
		<div class="col-xs-12 col-sm-3 bg-right">
			<i class="glyphicon glyphicon-envelope text-white"></i>
			<span class="text-white">Get in touch with us <i class="icon arrow_right"></i></span>
		</div>
	</div>
</template>

<style type="text/css">
.bg-left{
	 background-color: #e74c3c !important;
	 height: 150px;
	 padding-top: 70px;
}
.bg-left a{
	 color: #fff;
}
.bg-right{
	 background-color: #bf2718 !important;
	 height: 150px;
	 padding-top: 70px;
}
.container, .container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.text-white {
    color: #fff;
    display: inline-block;
}
.bg-left .text-white{
	padding-left: 30px;
}

.bg-right .text-white{
	padding-left: 30px;
	display: inline-block!important;
}

@media (max-width: 1080px) {
   .bg-right{
   	 text-align: center;
   }

   .bg-right .text-white{
	 padding-left: 0;
   }
}

@media (max-width: 780px) {
   .bg-left .text-white{
      display: block;
      padding-left:0!important;
	  text-align: center;
	  bottom: 40px;
      position: relative;
      padding-bottom: 10px;
   }
  
}

</style>

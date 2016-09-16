<template>
  <div>
    <div class="top-nav">
      <slot name="top_menu"></slot>
    </div>
    <div class="main-container" >
      <slot name="top_container"></slot>
    </div>
    <div class="footer-container">
      <slot name="top_footer"></slot>
    </div>
  </div>  
</template>
<script>
</script>
<style type="text/css">
  .main-container .view{
    text-align: center;
    margin-top: 100px;
    background: url('./../../static/img/bk.png');
    padding-bottom: 20px;
  }
  .top-nav{
    /*height: 40px;
    background: #e4e4e4;*/
    margin-bottom: 0px;
  }
  .footer-container{
    position: absolute;
    width: 100%;
  }
</style>
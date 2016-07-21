<template>
  <div class="scrollL">
    <slot name="srctwo">
    </slot>
  </div>
  <div class="scrollR">
    <slot name="srcone">
    </slot>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        a:1
      };
    }
  };
</script>
<style type="text/css">
  .scrollR{
      float: right;
  }
  .scrollL{
      float: left; 
  }
  .scrollR > div >div{
      line-height: 40px;
      text-align: left;
  }
</style>
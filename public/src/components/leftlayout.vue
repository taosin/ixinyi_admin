<template>

<div class="container-fluid admin-panel">
  <div class="row">
    <div class="col-lg-2 col-lg-offset-2 leftmenu-borad">
      <slot name="left_menu"></slot>
    </div>
    <div class="col-lg-7">
      <div class="left-container" >
        <slot name="left_container"></slot>
      </div>
    </div>
  </div>
</div>
</template>
<style type="text/css">
.admin-panel{
  background-color: #f3f3f3;
}
.leftmenu-borad{
  /*border-right: 1px black solid;*/
  background: #ffffff;
  height: 800px;
  padding:0;
}
.left-container{
  background: #ffffff;
  min-height: 800px;
  padding:34px;
  font-size: 18px;
}
</style>
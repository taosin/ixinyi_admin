<!--
    checkbox组件
    Taoxin    2016-05-01
    @params   value
-->

<template>
  <div class="md-checkbox">
    <input v-model="value"
           :id="id"
           :name="name"
           type="checkbox"/>
    <slot name="checkbox-text" ></slot>
  </div>
</template>
<style>
  .md-checkbox {
    width: 85px;
    height: 30px;
    text-align: left;
    float: left;
  }
  input[type=checkbox] {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    top:-8px;
    cursor: pointer;
    vertical-align: bottom;
    background: #fff;
    border: 2px solid #5a5a5a;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    transition: .2s;
  }

  input[type=checkbox]:checked,
  input[type=checkbox]:checked::after {
    /*content: url(//ssl.gstatic.com/ui/v1/menu/checkmark.png);*/
    /*display: block;*/
    /*position: absolute;*/
    /*top: -6px;*/
    /*left: -5px;*/
    top: -4px;
    left: -9px;
    width: 12px;
    height: 22px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #1B5E20;
    border-bottom: 2px solid #1B5E20;
    transform: rotate(40deg);
    backface-visibility: hidden;
    transform-origin: 100% 100%;
  }

  input[type=checkbox]:focus,
  input[type=checkbox]:hover{
    outline: none;
  }
</style>
<script>
  module.exports = {
    props: {
      value: {
        type: Boolean,
        required: false,
      },
      disabled: {
        type: Boolean,
        required: false,
      },
      name: {
        type: String,
        required: false,
      }
    }
  };

</script>

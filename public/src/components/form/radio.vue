<template>
  <div class="md-radio">
    <input v-model="value"
           :value="radioValue"
           :id="id" :name="name"
           type="radio"/>
    <slot name="radio-text"></slot>
  </div>
</template>
<style>
  .md-radio {
    width: 80px;
    height:30px;
    text-align: left;
    float:left;
  }

  input[type=radio]{
    -webkit-appearance: none;
    appearance: none;
    width: 13px;
    height: 13px;
    margin-bottom: 7px;
    margin-right: 8px;
    cursor: pointer;
    vertical-align: bottom;
    background: #fff;
    border: 2px solid #dcdcdc;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    transition: .28s;

  }
  input[type=radio]:focus{
    outline:none;

  }

  input[type=radio]:active {
    border-color: #c6c6c6;
    background: #ebebeb;
  }

  input[type=checkbox]:hover {
    border-color: #c6c6c6;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  input[type=radio] {
    -webkit-border-radius: 1em;
    -moz-border-radius: 1em;
    border-radius: 1em;
    width: 15px;
    height: 15px;
  }

  input[type=radio]:checked {
    background: #fff;
  }

  input[type=radio]:checked::after {
    content: '';
    display: block;
    position: relative;
    top: -1px;
    left: -2px;
    background: red;
    border:7px solid #2bb8aa;
    -webkit-border-radius: 1em;
    -moz-border-radius: 1em;
    border-radius: 1em;
  }

</style>
<script>
  module.exports = {
    props: {
      value: {
        type: String,
        required: false,
      },
      radioValue: {
        required: true
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

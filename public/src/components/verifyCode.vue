<!-- 验证码组件
Taoxin 2016-05-20
-->

<template>
  <div class="form-group" style="float:left">
    <input id="inputCode" type="text" :class="class" :placeholder="placeholder"/>
    <span id="code" class="verify-span"></span>
  </div>
</template>

<script>
  module.exports = {
    props:{
      verify:{
        type:Boolean,
        required: false,
        twoWay:true
      },
      placeholder:{
        type:String,
        required:false,
        twoWay:false
      },
      class:[]
    },
    ready(){
      const self = this;
      const inp = document.getElementById('inputCode');
      const code = document.getElementById('code');
      const c = new VerifyCode({
        inputArea: inp,
        codeArea: code,
        bgImg:'http://placeholder.qiniudn.com/100x100',
        bgColor:'',
        randomBg : false,
        click2refresh: true,
        validateEven: 'blur',
        validateFn(result){
          self.verify = result;
        }
      });
    },
    methods: {
    }
  };
</script>
<style>
  .verify-class {
    /*height: 200px;*/
    /*width: 300px;*/
  }

  .verify-input {
    width: 100px;
    height: 30px;
    float: left;
  }

  .verify-span {
    width: 114px;
    height: 40px;
    float: left;
    border:1px solid;
  }
</style>

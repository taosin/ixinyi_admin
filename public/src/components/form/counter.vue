<!--
    购物计数器组件
    Taoxin    2016-05-18
    @params   counter
-->

<template>
  <div class="input-field col-lg-3" v-if="type !== 'vertial'">
    
    <button @click="decrease" class="btn-nums-horizontal">-</button>
    <input 
           v-model="counter"
           :placeholder="placeholder" :id="id"
           :lazy="lazy" :number="number" :debounce="debounce" 
           class="counter-input-horizontal" @keyup="onlyNumber" onkeyup="onlyNumber"/>
    <button @click="increase" class="btn-nums-horizontal">+</button>
  </div>


  <div class="input-field col-lg-3" v-if="type === 'vertial'">
    <div class="counter-vertial">
    <input 
           v-model="counter"
           :placeholder="placeholder" :id="id"
           :lazy="lazy" :number="number" :debounce="debounce" 
           class="counter-input-vertial" @keyup="onlyNumber" onkeyup="onlyNumber"/>
      <div class="btn-nums-vertial">
        <span @click="increase" class="glyphicon glyphicon-menu-up increase-nums-vertial"></span>
        <span @click="decrease" class="glyphicon glyphicon-menu-down decrease-nums-vertial"></span>
      </div>
    </div>
    
  </div>
</template>
<script>
  module.exports = {
    props: {
     counter:{
      Type:Number,
      toWay:true
     },
     type:{
      Type:String,
      toWay:false,
      default:'horizontal'
     }
    },
    data() {
      return {
        isactive: false
      };
    },
    compiled() {
    },
    methods: {

        // 加数
        increase() {
            this.counter ++;
        },

        // 减数
        decrease() {
            if (this.counter > 1) {
              this.counter--;
            }
        },

        // 数字检验，非数字自动删除
        onlyNumber(){
            this.counter=this.counter.replace(/\D/g, '');
        }

    }
  };
</script>
<style type="text/css">
.counter-input-horizontal{
    border:1px solid #a9a9a9;
    width: 50px;
}
.counter-input-horizontal:focus{
    outline: none;
    border:1px solid #a9a9a9;
}
.counter-input-vertial{
    height: 37px;
    width:70px;
}
.counter-input-vertial:focus{
    outline:none;
}
.decrease-nums-vertial{
  border:1px solid #a9a9a9;
  background: #e7e7e7;
}
.increase-nums-vertial{
  border:1px solid #a9a9a9;
  background: #e7e7e7;
}
.btn-nums-vertial{
  width: 20px;
  height: 50px;
  float: right;;
}
.counter-vertial{
  width: 90px;
  height: 50px;
}
</style>

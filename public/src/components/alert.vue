<template>
  <div class="alert" v-show="show" v-bind:style="{background:bgColor,color:fontColor}">
      {{text}}
      <a class="close" @click="show = false" v-show="!hide"><span>&times;</span></a>
  </div>
</template>
<script>
  module.exports = {
    props: {
      text: {
        type: String,
        required: false,
        twoWay: false
      },
      show: {
        type: Boolean,
        required: false,
        twoWay: false
      },
      type: {
        type: String,
        required: false,
        twoWay: false
      },
      hide: {
        type: Boolean,
        required: false,
        twoWay: false
      }
    },
    data() {
      return {
        isactive: false,
        bgColor:'',
        fontColor:''
      };
    },
    ready(){
       const type = this.type;
       switch(type){
          case 'success':
             this.bgColor = '#dff0d8';
             this.fontColor = '#3c763d';
             break;
          case 'info':
             this.bgColor = '#d9edf7';
             this.fontColor = '#317095';
             break;
          case 'warning':
             this.bgColor = '#fcf8e3';
             this.fontColor = '#9b6d3b';
             break; 
          default :
             this.bgColor = '#fcf8e3';
             this.fontColor = '#dba974';
             break;
       }
    },
    compiled(){
      if (this.value) {
        this.isactive = true;
      } else {
        this.isactive = false;
      }
    },
    methods: {
      activateField(){
        this.isactive = true;
      },
      deactivateField(){
        if (this.value && this.value !== null) {
          this.isactive = true;
        } else {
          this.isactive = false;
        }
      }
    }
  };
</script>
<style type="text/css">
  .alert{
    width: 100%;
    /*height: 40px;*/
    border:1px solid #f3f3f3;
    background: #fcf8e3;
    text-align: left;
    padding: 10px;
    font-weight: 500;
    margin-top: 10px
  }
  a.close {
    margin-top: -3px;
    margin-right: 6px;
}
</style>

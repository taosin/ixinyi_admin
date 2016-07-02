<template>
  <div class="input-field col-lg-3">
    <div class="input-lable" v-bind:class="{'activeinput':isactive}">
      <slot name="input-lable"></slot>
    </div>
    <input v-if="disabled"
           v-model="value"
           :placeholder="placeholder" :id="id"
           :type="type"
           :lazy="lazy" :number="number" :debounce="debounce"
           disabled="disabled" class="input"/>
    <input v-else
           v-model="value"
           :placeholder="placeholder" :id="id"
           :type="type"
           :lazy="lazy" :number="number" :debounce="debounce"
           @focus="activateField"
           @blur="deactivateField"
           class="input"/>

  </div>
</template>
<script>
  module.exports = {
    props: {
      value: {
        type: String,
        required: false,
        twoWay: false
      },
      placeholder: {
        type: String,
        required: false,
        twoWay: false
      },
      disabled: {
        type: Boolean,
        required: false,
        twoWay: false
      },
      type: {
        type: String,
        required: false,
        twoWay: false
      },
      lazy: {
        type: Boolean,
        required: false,
        twoWay: false
      },
      number: {
        type: Boolean,
        required: false,
        twoWay: false
      },
      debounce: {
        type: Number,
        required: false,
        twoWay: false
      }
    },
    data() {
      return {
        isactive: false
      };
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
  .input-field {
    float: left;
    height: 100px;
    margin-top: 10px;
  }

  .input {
    top: -26px;
    border: none;
    background: none;
    position: relative;
    border-bottom: 1px solid red;

  }

  .input:focus {
    outline: none;
    border-bottom: 2px solid red;
  }

  .input-lable {
    color: #9e9e9e;
    font-size: 14px;
    margin-left: -80px;
    transition: .2s;
  }

  .activeinput {
    color: red;
    transform: translateY(-140%);
    font-size: 10px;
    margin-left: -80px;
  }
</style>

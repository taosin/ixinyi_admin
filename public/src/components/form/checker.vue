<template>
  <div class="checker-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    defaultItemClass: String,
    selectedItemClass: String,
    disabledItemClass: String,
    value: {
      type: [String, Number]
    }
  },
  watch: {
    value (newValue) {
      this.$emit('on-change', newValue);
    }
  }
};
</script>

<style>
.checker-item {
  display: inline-block;
}
</style>

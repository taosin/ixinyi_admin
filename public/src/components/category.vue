<template>
<div class="container">
  <div class="row">
    <ul class="filters">
      <li v-for="c in data" class="active" @click="select(c.key)">{{c.key}}</li>
    </ul>
  </div>
</div>
</template>

<script>
  import { selectCategory } from './../vuex/actions';
  export default {
   props:['data'],
   vuex: {
     actions:{
      selectCategory
     }
   },
   methods:{
     select(key){
       this.selectCategory(key);
     }
   }
  };
</script>

<style>
  .filters {
    padding: 0px;
    list-style: none;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 32px;
}
.filters li {
    float: left;
    margin-right: 16px;
    font-family: "Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #3498db;
    cursor: pointer;
}
.filters li.active {
    border-bottom: 2px solid #3498db;
}

</style>

<!-- 单选 -->
<template>
    <div class="common-single">
        <ul class="common-single-ul">
            <li v-for="data in datas" class="common-single-li">
                <a class="common-single-a" @click="select($index)" v-if="data.selected =='0'">{{data.text}}</a>
                 <a class="common-single-a-selected" @click="select($index)" v-else>{{data.text}}</a>
            </li>
        </ul>
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
      datas: []
    },
    data() {
      return {
      };
    },
    compiled(){
      
    },
    methods: {
      select(index){
        this.datas.forEach((a) => {
            a.selected = '0';
        });
        this.datas[index].selected = '1';
      }
    }
  };
</script>
<style>
    a.common-single-a {
    padding: 4px 18px;
    color: #666;
    border: 2px solid #eee;
    transition: 0.5s;
    }
    li.common-single-li {
    float: left;
    list-style: none;
    margin-left: 10px;
    text-decoration: none;
    }
    a.common-single-a:hover {
    border: 2px solid #f76120;
    color: #f76120;
    text-decoration: none;
    padding: 4px 18px;
    transition: 0.5s;
    }
    a.common-single-a-selected {
    border-color: #ffebd7;
    background-color: #ffebd7;
    color: #f76120;
    text-decoration: none;
    padding: 6px 20px;
    transition: 0.5s;
    }
</style>
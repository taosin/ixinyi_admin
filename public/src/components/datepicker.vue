<template>
    <div>
        <div class="class_datepicker">
            <select class="form-control datepicker-select" v-model="year">
                <option v-for="n in val" v-bind:value="yearval- n">{{yearval- n}}</option>
            </select> 
            <span>年</span>   
        </div>
        <div class="class_datepicker">
            <select class="form-control datepicker-select" v-model="month">
                <option v-for="n in monthval" v-bind:value="n">{{n+1}}</option>
            </select>            
            <span>月</span>   
        </div>
        <div class="class_datepicker">
            <select class="form-control datepicker-select" v-model="date">
                <option v-for="n in dateval" v-bind:value="n+1">{{n+1}}</option>
            </select>    
            <span>日</span>   
        </div>
        
    </div>
</template>
<script>
 module.exports = {
    props: {
      datetime: {
        type: Date,
        required: false,
        twoWay:true
      }
    },
    data(){
        return{
            val:80,
            yearval:new Date().getFullYear(),
            year:new Date().getFullYear(),
            monthval:12,
            month:new Date().getMonth(),
            // date:new Date(2016, 2, 0).getDate(),
            // dateval:new Date().getDate()
            date:new Date().getDate(),
            dateval:null,
        };
    },
    ready(){

        this.dateval = new Date(this.year, this.month+1, 0).getDate();
        this.datetime = new Date(this.year, this.month+1, this.date);
    },
    watch:{

        // 点击年月日时调整日期 datetime
        month(){

            this.dateval = new Date(this.year, this.month+1, 0).getDate();
            if (this.month === 1){
                 this.date = 1;
            }
            this.datetime = new Date(this.year, this.month+1, this.date);
        },
        date(){
            this.datetime = new Date(this.year, this.month+1, this.date);
        },
        year(){
            this.datetime = new Date(this.year, this.month+1, this.date);
        }
    },
    methods:{
        text(){
            alert('1111');
        }
    }
  };
</script>
<style type="text/css">
    .class_datepicker {
    width: 94px;
    /*border: 1px solid;*/
    float: left;
}
</style>
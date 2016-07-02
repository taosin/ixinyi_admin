<!-- 密码强度检测 -->
<template>
    <div class="password-check">
        <span class="check-span" v-bind:class="{'check-low':low,'check-mid':mid,'check-hig':hig}">弱</span>
        <span class="check-span" v-bind:class="{'check-mid':mid,'check-hig':hig}">中</span>
        <span class="check-span" v-bind:class="{'check-hig':hig}">强</span>
    </div>
</template>
<script>
    module.exports={
        props:{
            value:{
                type:String,
                twoWay:false
            }
        },
        data(){
            return{
                low:false,
                mid:false,
                hig:false,
            };
        },
        watch:{

            // 检测密码强度
            value(){
                // const len =this.value.length;
                
               const len= this.check(this.value);
               if(len === 1){
                    this.low = true;
                    this.mid = false;
                    this.hig = false;
                }else if (len ===2) {
                    this.low = false;
                    this.mid = true;
                    this.hig = false;

                }else if (len >= 3){
                    this.low = false;
                    this.mid = false;
                    this.hig = true;
                }else{
                    this.low = false;
                    this.mid = false;
                    this.hig = false;
                }   
            }

        },
        methods:{
            check(val) {
                let ls = 0;
                if (val.match(/[a-z]/g)){
                    ls++;
                }
                if (val.match(/[A-Z]/g)){
                    ls++;
                } 
                if (val.match(/[0-9]/g)){
                    ls++;
                }
                if (val.match(/[^a-zA-Z0-9]/g)){
                    ls++;
                }
                if (val.length < 8 && ls > 1){
                    ls = 1;
                }
                if(ls>3) {
                    ls=3;
                }
                return ls;
            }
        }

    };
</script>
<style type="text/css">
span.check-span{
    display: block;
    float: left;
    text-align: center;
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    width: 76px;
    border-right: 2px solid #fff;
    color: #fff;
    background: #d3ebee;
}
span.check-low{
    background: #ea9292;
    transition: 0.5s
}
span.check-mid{
    background: #f76120;
    transition: 0.5s
}
span.check-hig{
    background: #5abb3c;
    transition: 0.5s
}
</style>
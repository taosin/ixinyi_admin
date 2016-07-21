<!--模态框-->
<template>
    <div class="modal-mask" v-show="show" transition="modal" @click="closemodal">
       <div class="modal-wrapper">
        <div class="modal-container">

            <div class="modal-header">
                <a class="close" @click="show = false"><span>&times;</span></a>
                <slot name="header">
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                    default body
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                </slot>
            </div>
        </div>
    </div>
</div>

</div>
</template>

<script>
    module.exports = {
        props: {
            show: {
                type: Boolean,
                required: true,
                twoWay: true
            },
            shadow:{
                type:Boolean,
                required:false,
                twoWay:false
            }
        },
        methods: {

            // 点击阴影处关闭modal
            closemodal(e){
                const classname = e.target.className;
                if(e.target.parentNode.className === 'close'){
                    this.show = false;
                }
                if (this.shadow){
                    if (classname === 'modal-wrapper'){
                        this.show = false;
                    } else if(e.target.parentNode.className === 'close'){
                        this.show = false;
                    } else{
                        this.show = true;
                    }
                } else{
                    if(e.target.parentNode.className === 'close'){
                        this.show = false;
                    }else{

                        this.show = true;
                    }
                }
            }
        }

    };
</script>
<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        max-width: 600px;
        min-width: 500px;
        margin: 0px auto;
        /*padding: 20px 30px;*/
        background-color: #fff;
        border-radius: 0px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
        /*border:5px solid #999999;*/
        height: 300px;
        position: relative;
        z-index: 99999;
    }
    .modal-header {
        min-height: 16.43px;
        padding: 0px; 
        border-bottom: 1px solid #e5e5e5;
        background: #e5e5e5;
        text-align: left;
    }
    .modal-header p {
        /*margin-top: 0;*/
        padding: 8px 0px 0 10px;
        color: black;
        font-weight: bolder;
    }

    .modal-body {
        margin: 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * the following styles are auto-applied to elements with
     * v-transition="modal" when their visiblity is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

     .modal-enter, .modal-leave {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    a.btn.btn-cancel{
        color: #333;
        background-color: #dedede;
        border: 1px solid #e3e3e3;
        border-bottom: 1px solid #aaa;
        background-size: 100%;
        border-radius: 0px;
    }
    a.btn.btn-submit{
        color: #ffffff;
        background-color: #2db3a6;
        border: 1px solid #e3e3e3;
        border-bottom: 1px solid #aaa;
        background-size: 100%;
        border-radius: 0px;
    }
    .modal-header .close {
        margin: 6px 15px;
    }
    .modal-footer {
        padding: 0 0 15px 0;
        text-align: justify;
        border-top: none; 
    }
</style>
<template>
    <div>
       <toplayout>
         <div slot="top_menu" class="top-nav">
             <menu></menu>
         </div>
     </toplayout>
     <router-view slot="top_container" class="view" transition="expand" transition-mode="out-in"></router-view>
     <div slot="top_footer" class="top-foot">
         <span id="busuanzi_container_site_pv">
             访问量<span id="busuanzi_value_site_pv"></span>
         </span>|
         <span id="busuanzi_container_site_uv">
         访客数<span id="busuanzi_value_site_uv"></span>
      </span>
  </div>
</div>
</template>

<script>
    import toplayout from './components/toplayout.vue';
    import menu from './views/menu.vue';
    import store from './vuex/store';
    module.exports = {
        components:{
           toplayout,
           menu
       },
       store,
       ready(){
        this.$AVInit();
    }
};
</script>
<style type="text/css">
    .top-foot{
        text-align: center;
    }
    .fa{
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .fa-user:before {
        content: "\f007";
    }
</style>
<style lang="less">


    .expand-transition {

    }

    .expand-enter {
        animation: expand-in 0.5s;
    }

    .expand-leave{
        animation: expand-out 0.5s;
    }

    @keyframes expand-in {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.75;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes expand-out {
       0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
}

</style>
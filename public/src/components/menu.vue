<template>
<div class="fixedeasein" :class="{'navbar-fixed-top':navIsShow}">
<!-- <div class="navbar " v-el:navmenu> -->
      <div class="container navborder-red">
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" @click="showMenu">
            <span class="icon-bar" :class="{xbar:isShow}"></span>
            <span class="icon-bar" :class="{xbar:isShow}"></span>
            <span class="icon-bar" :class="{xbar:isShow}"></span>
          </button>
          <a class="navbar-brand hidden-sm" href="">VueTheme-Red</a>
        </div>
        <div class="navbar-collapse" style="height: 1px;" :class="{showbyopacity:isShow,navbaran:isShow}">
          <ul class="nav navbar-nav navbar-right" :class="{showtranslate:isShow}">
            <li v-for="menu in data"><a href="/#{{menu.url}}">{{menu.text}}</a></li>
            <li class="hidden-sm"><a href="#">About</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
 module.exports = {
   props:['data'],
   data() {
     return {
       isShow: false,
       navIsShow: false
     };
   },
   methods: {
     showMenu() {
       this.isShow = !this.isShow;
     },
     scrollFixed() {
       let timer;
       window.onscroll = () => {
         if (timer) {
           clearTimeout(timer);
         }
         if (this.navIsShow){
           this.navIsShow=false;
         }
         timer = setTimeout(() => {
           this.navIsShow = true;
         }, 500);
       };
     }
   }
 };
</script>
<style type="text/css">
.navbar-fixed-top .navbar-toggle{
  z-index: 1;
}
.fixedeasein{
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  transition: all .5s ease;
}
.menu-animate{
  -webkit-transition: visibility .5s ease;
  -moz-transition: visibility .5s ease;
  transition: visibility .5s ease;
  visibility: visible;
}
.navbar-brand{
  font-size: 25px;
  padding-top: 21px;
  color: black;
  font-weight: bold;
}
.navbar-right{
  background-color: white;
}
.navborder-red {
  border-bottom: 1px red solid;
  background-color: white;
}
.navborder-red .icon-bar {
  background-color: #888;
  top:0;
}
.navbar-nav>li>a{
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #777777;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    padding-bottom: 40px;
    padding-top: 30px;
    display: inline-block;
    line-height: 14px;
    cursor: pointer;
    width: 100%;
}
.navbaranimal{
    transform:translateY(100px);
    transition: -webkit-transform 400ms cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
    background-color: rgb(255, 255, 255);
  }
.showbyopacity{
  opacity:1!important;
}
.showtranslate{
  transform: translate3d(0px, 0px, 0px)!important;
}
@media (max-width: 780px) {
  .navbar-nav>li>a{
    padding-bottom: 15px;
    padding-top: 15px;
  }
  .navbar-collapse {
    opacity:0;
  }  
  .navbaran{
    transition: opacity 800ms cubic-bezier(0.39, 0.575, 0.565, 1) 300ms;
  }
  .navbar-collapse .navbar-right{
    transform: translate3d(0px, -40px, 0px);
    transition: -webkit-transform 500ms cubic-bezier(0, 1, 1, 0.73) 300ms;
  }
}
.navbar-header .navbar-toggle {
  width: 40px;
  height: 40px;
}
.navbar-header .navbar-toggle .xbar{
   position: absolute;
   right: 10px;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    opacity: 1;
    -webkit-transition-delay: 0ms;
    -moz-transition-delay: 0ms;
    -o-transition-delay: 0ms;
    transition-delay: 0ms;
    -webkit-transition: top, -webkit-transform 200ms cubic-bezier(0, 1, 1, 0.73) 100ms;
    -moz-transition: top, -moz-transform 200ms cubic-bezier(0, 1, 1, 0.73) 100ms;
    -o-transition: top, -o-transform 200ms cubic-bezier(0, 1, 1, 0.73) 100ms;
    transition: top, transform 200ms cubic-bezier(0, 1, 1, 0.73) 100ms;
}
.navbar-header .navbar-toggle .xbar:nth-child(1) {
    top: 16px;
    -webkit-transform: rotate(45deg) scaleX(1.442);
    -moz-transform: rotate(45deg) scaleX(1.442);
    -o-transform: rotate(45deg) scaleX(1.442);
    transform: rotate(45deg) scaleX(1.442);
}
.navbar-header .navbar-toggle .xbar:nth-child(2) {
    opacity: 0;
}
.navbar-header .navbar-toggle .xbar:nth-child(3) {
    top: 13px;
    -webkit-transform: rotate(-45deg) scaleX(1.442);
    -moz-transform: rotate(-45deg) scaleX(1.442);
    -o-transform: rotate(-45deg) scaleX(1.442);
    transform: rotate(-45deg) scaleX(1.442);
}
</style>
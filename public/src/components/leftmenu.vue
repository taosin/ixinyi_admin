<template>
  <div  id="nav">
          <div class="left-top">
            <p>xinyixin</p>
            <p>梦开始的地方</p>    
          </div>
           <ul class="left-menu" >
             <li v-for="menu in data" class="left-menu-div">
                <a v-if="!menu.child" href="{{menu.url}}" class="leftmenu-parent" @click="select($index)" v-bind:class="{menu_selected:activeMenu === $index}">{{menu.text}}</a>
                <!-- <a class="left-menu-parent">{{menu.text}}</a> -->
                <ul v-if="menu.childItem">
                  <li v-for="submenu in menu.childItem" ><a href="{{submenu.url}}" class="leftmenu-child">{{submenu.text}}</a></li>
                </ul>
             </li>
           </ul>
        <!-- <div class="navbar-header">
          <button class="navbar-toggle" type="button" @click="showMenu">
            <span class="icon-bar" :class="{xbar:isShow}"></span>
            <span class="icon-bar" :class="{xbar:isShow}"></span>
            <span class="icon-bar" :class="{xbar:isShow}"></span>
          </button>
        </div> -->
  </div>
</template>
<script>
 module.exports = {
   props: ['data', 'activeindex'],
   data(){
      return{
          actived:false,
          activeMenu:1
      };
   },
   compiled(){
   },
   methods: {
     showMenu() {
       this.isShow = !this.isShow;
     },
     showSubMenu(id) {
       if (this.activeindex === id) {
         this.activeindex = 0;
       } else {
         this.activeindex = id;
       }
     },
     goto(urlObject) {
       if (typeof(urlObject) === 'string') {
         window.router.go({
           path: urlObject
         });
       } else {
         window.router.go(urlObject);
       }
     },
     select(i){
        this.activeMenu = i;
        // alert(i);

     }
   }
 };
 </script>
<style type="text/css">

ul.left-menu{
  list-style: none;
  padding: 0;

}
.left-menu-div{
  border-bottom: 1px solid #ffffff;

}
ul.left-menu li{
    min-height: 40px;
    line-height: 40px;
    height: auto;
    list-style: none;

    /*border-bottom: 1px black solid;*/
}
.left-menu-parent{
  /*li: 60px;*/
}
ul.left-menu li a:hover{
  color:red;
  text-decoration: none;
  display: inline-block;
    /*border-bottom: 1px black solid;*/
}
.leftmenu-parent{
  font-size: 16px;
  color:black;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  font-size: 14px;

}
.leftmenu-child{
  font-size: 14px;
  color:black;
  display: inline-block;
  width: 100%;
  height: 100%;

}
.menu_selected{
  background: #f3f3f3;
}
.left-top{
  height: 100px;
  background: #000000;
  width: 100%;
  text-align: center;
  padding:20px;
}
.left-top p{
  color: #ffffff;
}

</style>
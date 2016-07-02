<template>
<div>
<!-- 分类 -->
  <category :data="category"></category>
  <div class="container">
    <div class="projects-container column-projects" v-el:imgblog>
      <!-- 图片列表 -->
      <div class="col-md-4 col-sm-6 project development image-holder" v-for="blog in data">
        <img class="background-image" alt="Background Image" :src="blog.pic">
        <div class="hover-state" @mouseenter="in" @mouseout="out">
          <div class="align-vertical" >
            <h3 class="text-white">{{blog.title}}</h3>
            <a href="#" class="btn btn-primary btn-white">{{blog.url}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
 import category from './category.vue';
 export default {
   components: {
     category
   },
   props: ['data', 'category'],
   methods: {
     in (e) {
       const dom = e.srcElement || e.target;
       dom.getElementsByClassName('align-vertical')[0].style.top = '-100px';
     },
     out(e) {
       const dom = e.srcElement || e.target;
       const targetDom = dom.getElementsByClassName('align-vertical')[0];
       if (targetDom) {
         targetDom.style.top = '150px';
       }
     }
   }
 };
</script>

<style>
.column-projects {
    margin-bottom: 80px;
}
.column-projects .project.col-md-4 {
    overflow: hidden;
}
.column-projects .project {
    margin-bottom: 15px;
}
.column-projects .project.col-md-4 .background-image-holder {
    width: 100% !important;
}
.column-projects .project .background-image-holder {
    left: 15px;
}
@media (max-width: 780px) {
   .column-projects .project .background-image-holder {
    left: 0;
   }
}
.background-image-holder, .foreground-image-holder {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-size: cover !important;
    z-index: 0;
    background-position: 50% 50% !important;
}
.projects-wrapper {
    text-align: center;
}
.project img {
    width: 100%;
}
img {
    max-width: 100%;
}
.project .hover-state {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: rgba(44, 62, 80, 0.9);
    text-align: center;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    opacity: 0;
    padding-right: 15px;
}
.hover-state .align-vertical {
    -webkit-transform: translate3d(0, 200px, 0);
    -moz-transform: translate3d(0, 200px, 0);
    transform: translate3d(0, 200px, 0);
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    opacity: 1;
}
.hover-state h3 {
    margin-bottom: 24px;
}
.project .hover-state h3 {
    font-size: 18px;
    margin-bottom: 8px;
}
.btn-primary {
    border-radius: 25px;
    display: inline-block;
    padding: 14px 28px 13px 28px;
    line-height: 1;
    border: 2px solid #3498db;
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #3498db;
}
.btn-white {
    border-color: #fff;
    color: #fff;
}
.project .hover-state:hover{
  opacity: 1;
}
.hover-state .align-vertical{
  top: 100px;
  position: relative;
  text-align: center;
}
.align-vertical .text-white{
  display: block;
}
</style>

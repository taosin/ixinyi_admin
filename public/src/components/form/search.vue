<!-- 搜索组件
Taoxin   2016-05-19
 -->

 <template>
     <div class="search-bar">
     <!-- <ul class="search-menu">
        <li >
        <a>{{queryOne}}</a>
          <ul class="childs">
            <li><a @click="choose">{{queryTwo}}</a></li>
          </ul>
        </li>
      </ul> -->
      <input class="form-control input-search-bar" :placeholder="placeholder" v-model="value"/>
      <button class="btn-search-bar form-control" @click="search">搜索</button>
    </div>
 </template>
<script>
  module.exports = {
    props: {
      value: {
        type: String,
        required: false,
        twoWay: true
      }
    },
    data() {
      return {
        isactive: false,
        queryOne:'商品',
        queryTwo:'商家',
        queryKey:1,
        placeholder:'请输入商品名称、地址等'
      };
    },
    compiled(){
    },
    methods: {
      search(){
         this.$parent.search();
      },
      choose(){
        this.queryKey = this.queryKey * -1;
        if (this.queryKey === 1) {
          this.queryOne = '商品';
          this.queryTwo = '商家';
          this.placeholder='请输入商品名称、地址等';
        } else{
          this.queryOne = '商家';
          this.queryTwo = '商品';
          this.placeholder='请输入商家名称、地址等';
        }
      }
    }
  };
</script>

 <style type="text/css">
 .search-bar{
    width: 600px;
    float: left;
    border:2px solid red;
 }
 .dropdown-search-bar{
    float: left;
    width: 400px;
 }
 .btn-search-bar{
    float: left;
    width: 100px;
    height: 35px;
    color: #ffffff;
    font-size: 18px;
    background: red;
    border: none;
    border-radius: 0px;

 }
  .btn-search-bar:hover{
    outline: none;
  }
.input-search-bar{
    width: 496px;
    float: left;
    height: 35px;
    border-radius: 0px;
}
.input-search-bar:focus{
    border-radius: 0px;
    border:none;
}

.search-menu,.search-menu ul {
    list-style:none;
    margin:0;
    padding:0;
}

.search-menu {
    position:relative;
}

.search-menu ul {
    height:0;
    left:0;
    overflow:hidden;
    position:absolute;
    top:35px;
}

.search-menu li {
    float:left;
    position:relative;
}

.search-menu li a {
    border:1px solid #f3f3f3;
    color:black;
    display:block;
    font-size:18px;
    line-height:10px;
    padding:10px;
    text-decoration:none;
    width: 80px;
    height: 35px;
    background-image: url('../../../static/img/arrow.png');
    background-repeat:no-repeat;
    background-position: 60px 10px;
}

.search-menu li:hover > a {
    /*background:#8CCA33;*/
    color:red;
    border-bottom:1px solid red;
    background-image: url('../../../static/img/arrow_1.png');
    background-repeat:no-repeat;
}
ul.childs li a{
  background-image: none;
  border: 1px solid red;
} 
ul.childs li a:hover{
  background-image: none;
  border: 1px solid red;
} 

.search-menu li:hover ul.childs {
    height:auto;
}

.search-menu ul li {
    opacity:0;
    width:100%;
}
.search-menu li:hover ul li {
    opacity:1;
}

.search-menu ul li a {
    line-height:1px;
}

.search-menu li:hover ul li a {
    line-height:10px;
}

.search-menu ul li a:hover {
    border: 1px solid red;
}

 </style>


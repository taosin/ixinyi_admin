<template>
  <div class="messagebox">
    <div class="top">
    </div>
    <div class="main">
      <div class="message-inputs">
        <input type="text" placeholder="姓名,必填" class="form-control message-input" v-model="name">
        <input type="text" placeholder="邮箱,必填" class="form-control message-input" v-model="mail">
        <input type="text" placeholder="网址,选填" class="form-control message-input" v-model="website">
      </div>
      <div class="form-group">
      </div>
      <div class="form-group">
        <textarea v-model="content" placeholder="说点什么吧..." class="form-control textarea" rows="4">
        </textarea>
      </div>
      <div class="form-group">
        <a class="submit-btn" @click="submit">提交</a>
      </div>
    </div>
    <div class="msg-list">
      <ul v-for="data in msgs" class="msg-li" v-if="msgs.length >0">
        <li>
          <label>{{data.name}}</label>
          <span>{{this.$formatDate(data.createdAt, 'yyyy-MM-dd hh:mm')}}</span>
          <p>{{data.content}}</p>
        </li>
      </ul>
      <ul v-if="msgs.length===0" class="msg-li">
        <li>
          <h4>快来抢沙发吧。。。</h4>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
	import './../../static/css/message.scss';
  import { addMsg, getMessages } from './../service/article';
  export default{
   components:{
   },
   data(){
     return{
      article:{},
      content:'',
      name:'',
      mail:'',
      website:'',
      msgs:[]
    };
  },
  vuex:{
   getters:{
    result: state => state.addMessageRel,
    datas: state => state.messages
  },
  actions:{
    addMsg,
    getMessages
  }
},
attached(){
  const data = {};
  data.start = 0;
  data.limit = 100;
  this.getMessages(data);
},
watch:{
  name(val){
    this.name = this.name.trim();
  },
  mail(val){
    this.mail = this.mail.trim();
  },
  website(val){
    this.website = this.website.trim();
  },
  content(val){
    this.content = this.content.trim();
  },
  result(val){
    const data = {};
    data.start = 0;
    data.limit = 100;
    this.getMessages(data);
    this.name = '';
    this.mail = '';
    this.content = '';
    this.website = '';
  },
  datas(val){
    this.msgs = val;
  }
},
methods:{
  submit(){
    if(this.name.trim() && this.mail.trim() && this.content.trim()){
      const data = {};
      data.name = this.name;
      data.mail = this.mail;
      data.website = this.website;
      data.content = this.content;
      this.addMsg(data);
    }
  }
}
};
</script>

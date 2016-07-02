<template>
    <div class="slick-trackT">
     <div class="last" v-on:click="nex(2)">
       <div>
       </div>
       《
     </div>
      <div class="slick-track" >
        <slot>
          您还没有添加任何东西哦
        </slot>
      </div>
      <div class="abbreviations">
         <div v-for = "s in slot" v-on:click="abbreviations($index)">
           <div :class="{ 'xuanzhong': exhibition === $index }">
           </div>
         </div>
      </div>
      <div class="nex" v-on:click="nex(1)">
      <div>
       </div>
         》
     </div>
    </div>
</template>
<script>
  export default {
      props: ['switchType', 'autoplay', 'afterChange', 'exhibition'],
      data(){
        return {
           exhibition:0, // 当前展示的第几个
           slot:[], // 添加进入的内容(slot 所包含的东西)
           slotLength:0, // slot 内第一层的元素数量
           slick:null  // 需要移动的元素(slot父级)
        };
      },
      watch:{
        exhibition(a, b){
          this.abbreviations(a);
        }
      },
     ready(){
        // 设置默认
        if (!this.switchType){
            this.switchType = '1';
        }

        if (!this.autoplay){
            this.autoplay = '1';
        }

        const switchType = this.switchType;
        const f = document.querySelector('.slick-track');
        const z = f.children;
        const len = z.length;

        f.style.width=len.toString()+'00%';

        for (let i = 0; i<len; i++){
          if (switchType === '1'){
            z[i].style.width=(100/len)+'%';
           } else {
            z[i].style.width='0';
           }
         }

         // 处理显示数大于
        if (this.exhibition >= len){
          this.exhibition = len-1;
        }
        // 明暗切换初始化显示那个
        z[this.exhibition].style.width = (100/len)+'%';
        const trr = -(100/len)*this.exhibition;
        f.style.webkitTransform = 'translate('+trr+'%,0px)';
        // 绑定
        this.slot = z;
        this.slotLength = len;
        this.slick = f;

        // 移动端手指滑动
        const self = this;
        let startX = 0; // 手指刚接触屏幕的位置
        let moveX = 0; // 手指移动时的位置
        // 记录手指刚接触屏幕位置
        const touchStart = (event) => {
          const touch = event.touches[0];
          startX = touch.pageX;
        };
        // 手指开始移动时容器跟随手指移动
        const touchMove = (event) => {
          const touch = event.touches[0];
          moveX = touch.pageX;
          const trackW = document.querySelector('.slick-trackT').clientWidth;
          let tr = 0;
          if (switchType === '1'){
            tr = -(self.exhibition*trackW)+(moveX-startX);
          }
          f.style.webkitTransform = 'translate('+tr+'px,0px)';
        };
        // 手指抬起时 对比位置 进行处理
        const touchEnd = (event) => {
          if (moveX !== 0){
            if ((moveX-startX) > 30){
              self.nex(2);
            } else if ((moveX-startX) < -30){
              self.nex(1);
            } else {
              const tr = -(100-(100/self.slotLength));
              f.style.webkitTransform = 'translate('+tr+'%,0px)';
            }
          }
          moveX = 0;
          startX = 0;
        };
        f.addEventListener('touchstart', touchStart, false);
        f.addEventListener('touchmove', touchMove, false);
        f.addEventListener('touchend', touchEnd, false);
        // 自动切换

        let sI = 0;
        if (self.autoplay === '1'){
          sI = setInterval(() => {
            self.nex(1);
          }, 3000);
        }
        f.onmouseover = () => {
          if (self.autoplay === '1'){
            window.clearInterval(sI);
          }
        };
        f.onmouseout = () => {
          if (self.autoplay === '1'){
            sI = setInterval(() => {
                    self.nex(1);
              }, 3000);
          }
        };

     },
     methods:{
        nex(type){
           const self = this;
           const a = self.exhibition;
           let tr = 0;
            switch (type){ // type 上一页还是下一页 1：下一页 2上一页
              case 1:
                if (self.exhibition === self.slotLength-1){
                  self.exhibition = 0;
                } else {
                  self.exhibition ++;
                  tr = -(100/self.slotLength)*self.exhibition;
                }
                break;
              default:
                if (self.exhibition === 0){
                  self.exhibition = self.slotLength-1;
                  tr = -(100-(100/self.slotLength));
                } else {
                  self.exhibition --;
                  tr = -(100/self.slotLength)*self.exhibition;
                }
            }
            switch (self.switchType) {
              case '1':
                self.slick.style.webkitTransform = 'translate('+tr+'%,0px)';
                break;
              default:
                  self.slot[a].className = 'xiaoshi';
                  setTimeout(() => {
                    self.slot[a].style.width = 0;
                    self.slot[self.exhibition].style.width = (100/self.slotLength)+'%';
                    self.slot[self.exhibition].className = 'xianshi';
                  }, 490);
            }
        },
        abbreviations(i){
            const self = this;
            const a = self.exhibition;
            self.exhibition = i;
            const tr = -(100/self.slotLength)*self.exhibition;
            switch (self.switchType){
              case '1':
                self.slick.style.webkitTransform = 'translate('+tr+'%,0px)';
                break;
              default:
                if (this.afterChange){
                  this.afterChange();
                }
                self.slot[a].className = 'xiaoshi';
                setTimeout(() => {
                    self.slot[a].style.width = 0;
                    self.slot[self.exhibition].style.width = (100/self.slotLength)+'%';
                    self.slot[self.exhibition].className = 'xianshi';
                }, 490);
            }
        }
      }
};
</script>
<style type="text/css">
  .slick-track{
    position: relative;
    overflow: hidden;
    transition: 0.2s;
    -webkit-transition: 0.2s;
  }

  .slick-track > div{
        height: 100%;
        float: left;
        overflow: hidden;
  }

  .slick-trackT{
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .last,.nex{
    top:0px;
    position: absolute;
    z-index: 1;
    font-size: 40px;
    height: 100%
  }

  .last > div , .nex > div{
    height: -webkit-calc(50% - 50px);
    width: 100%
  }

  .last:hover ,.nex:hover{
     color: red
  }

  .last{
    left: 10px;
  }
  .nex{
    right: 10px;
  }

  @-webkit-keyframes xianshi{
    from {opacity: 0;}
    to {opacity: 1;}
  }

  .xianshi{
    -webkit-animation:xianshi 0.5s; /* Safari and Chrome */
  }

  @-webkit-keyframes xiaoshi{
    from {opacity: 1;}
    to {opacity: 0;}
  }

  .xiaoshi{
    -webkit-animation:xiaoshi 0.5s; /* Safari and Chrome */
  }

  .abbreviations{
    margin: auto;
    display: inline-block;
  }

  .slick-track > div >img{
    max-width: 100%
  }

  .abbreviations > *{
    width: 40px;
    float: left;
    height: 30px;
    line-height: 30px;
  }

  .abbreviations > div > div{
    width: 6px;
    height: 6px;
    border: 1px solid #000;
    border-radius: 3px;
    margin: auto;
    margin-top: 12px;
  }

  .xuanzhong{
    background: #000;
  }
</style>
<template>
  <section class="cont">
    <swipers></swipers>
    <div class="nav">
      <ul>
        <li v-for="i in datas.json">
          <i><img :src="i.img" alt=""></i>
          <span>{{i.tit}}</span>
        </li>  
      </ul> 
    </div>
    <div class="auto_nav">
      <div class="title">
        <span><img src="../img/icon/icon_kuaibao.png" alt=""></span>
        <span><b>热</b></span>
        <div class="box">
          <swiper :options="swiperOption">
            <swiper-slide>iPhone手机最神奇的功能,原来这</swiper-slide>
            <swiper-slide>三考的江南世家闹分手肯定能</swiper-slide>
          </swiper>
        </div>
        <span> | 更多</span>
      </div>
    </div>
    <main class="main">
        <div class="top">
          <span><img src="../img/icon/icon_miaosha.png" alt=""></span>
          <span>12点场</span>
          <p><span>京选尖货轮翻秒</span><img src="../img/icon/arrow_rt.png" alt=""></p>
        </div>
        <scroll :scrolls="datas.scroll_img"></scroll>
    </main>
    <goog></goog>
    <fashion></fashion>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import scroll from "./Scroll"
import goog from "./Goog"
import fashion from "./Fashion"
import navs from './Navs'
import swipers from './Swiper'
export default {
  props:["datas"],
  data(){
    return{
        swiperOption: {
          autoplay: 2000,
          direction : 'vertical',
          loop:true
        }
    }
  },
  components: {
    swiper,
    swiperSlide,
    scroll,
    goog,
    navs,
    swipers,
    fashion
  }
}
</script>
<style>
.cont{
  width:100%;
  -webkit-flex: 1;
  overflow-y:scroll;
}
  .nav{
  width:100%;
  background:#f5f5f5;
}
.nav ul{
  width:100%;
  flex-wrap:wrap;
  display: flex;
  padding:8px 0px 8px 0px;
}
.nav ul li{
  width:20%;
  text-align:center;
  font-size:12px;
  padding:5px;
  flex-wrap:wrap;
  box-sizing:border-box;
}
.nav ul li i img{
  width:38px;
  height:38px;
}
.nav ul li span{
  display:block;
}
  .auto_nav{
    width:100%;
    height:.4rem;
    background: #f5f5f5;
  }
  .title{
    width:95%;
    height:.3rem;
    margin:auto;
    background:#fff;
    border-radius:14px;
    display: flex;
    font-size: 12px;
  }
  .title span:nth-child(1){
    padding:8px 0px 0px 8px;
  }
  .title span:nth-child(2){
    color:red;
    font-size:.14rem;
    padding:5px 5px 0px 5px;
    box-sizing:border-box;
  }
  .title span:nth-child(1) img{
    width:55px;
    height:15px;
  }
  .title span:nth-child(4){
    padding:8px 10px 0px 5px;
    box-sizing:border-box;
  }
  .box{
    width:55%;
    text-align:center;
    height:.15rem;
    overflow:hidden;
    margin-top:8px;
  }
  .main{
    width:100%;
    overflow: hidden;
    background:#fff
  }
  .top{
    width:100%;
    display:flex;
    font-size:12px;
  }
  .top span:nth-child(1){
    padding:10px 5px 0px 8px;
  }
  .top span:nth-child(2){
    flex:1;
    font-weight:600;
    padding:10px 0px 0px 0px;
  }
  .top p:nth-child(3){
    padding:10px 10px 0px 0px;
    box-sizing:border-box;
    color: #ed4457;
  }
  .top p:nth-child(3) img{
    width:14px;
    height:14px;
  }
  .top span:nth-child(1) img{
    width:75px;
    height:15px;
  }
</style>
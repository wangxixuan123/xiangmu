<template>
	<div class="bottom">
		<swiper :options="swiperScroll" class="swiper-scroll">
            <swiper-slide class="scroll_box" v-for="item in scrolls">
            	<p><img :src="item.img" alt=""></p>
            	<p><span>￥<b>{{item.price}}</b></span><span>￥{{item.history}}</span></p>
            </swiper-slide>
            <!-- <swiper-slide class="scroll_box">
            	<p><img src="../img/product/01 (37).jpg" alt=""></p>
            	<p><span>￥<b>29.9</b></span><span>￥99</span></p>
            </swiper-slide>
            <swiper-slide class="scroll_box">
            	<p><img src="../img/product/01 (52).jpg" alt=""></p>
            	<p><span>￥<b>29.9</b></span><span>￥99</span></p>
            </swiper-slide>
            <swiper-slide class="scroll_box">
            	<p><img src="../img/product/01 (147).jpg" alt=""></p>
            	<p><span>￥<b>29.9</b></span><span>￥99</span></p>
            </swiper-slide>
            <swiper-slide class="scroll_box">
            	<p><img src="../img/product/01 (144).jpg" alt=""></p>
            	<p><span>￥<b>29.9</b></span><span>￥99</span></p>
            </swiper-slide>
            <swiper-slide class="scroll_box">
            	<p><img src="../img/product/01 (16).jpg" alt=""></p>
            	<p><span>￥<b>29.9</b></span><span>￥99</span></p>
            </swiper-slide>
            <swiper-slide class="scroll_box">
            	<p><img src="../img/product/01 (65).jpg" alt=""></p>
            	<p><span>￥<b>29.9</b></span><span>￥99</span></p>
            </swiper-slide>
            <swiper-slide class="scroll_box">
            	<p><img src="../img/product/01 (86).jpg" alt=""></p>
            	<p><span>￥<b>29.9</b></span><span>$99</span></p>
            </swiper-slide>
            <swiper-slide class="scroll_box">
            	<p><img src="../img/product/01 (87).jpg" alt=""></p>
            	<p><span>￥<b>29.9</b></span><span>￥99</span></p>
            </swiper-slide> -->
        </swiper>
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
         props:["scrolls"],
		data(){
			return{
				swiperScroll: {

		        	slidesPerView:"auto"
		        }
			}
		},
		components:{
		    swiper,
		    swiperSlide
		}
	}
</script>
<style>
	.bottom{
        width:100%;
		padding-top:10px;
        overflow: hidden;
	}
    
	.scroll_box{
		flex:1;
		padding:0px 3px 0px 3px;
		text-align:center;
	}
	.scroll_box p:nth-child(1) img{
		width:80px;
	    height:80px;
	}
	.scroll_box p:nth-child(2) span{
	    display: block;
	    color: #e2332e;
	    font-size:12px;
	}
  	.scroll_box p:nth-child(2) span b{
  	  font-size:16px;
  	}
  	.scroll_box p:nth-child(2) span:nth-child(2){
	    text-decoration: line-through;
	    font-size:12px;
	    color: #999;
  	}
</style>
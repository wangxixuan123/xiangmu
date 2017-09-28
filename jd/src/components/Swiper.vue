<template>
	<div class="sec_box">
		<div class="header_banner">
      		<mt-swipe :auto="4000">
		    	<mt-swipe-item>
		          <img src="../img/header_swiper/01.jpg" alt="">
		        </mt-swipe-item>
		        <mt-swipe-item>
		          <img src="../img/header_swiper/02.jpg" alt="">
		        </mt-swipe-item>
		        <mt-swipe-item>
		          <img src="../img/header_swiper/03.jpg" alt="">
		        </mt-swipe-item>
		        <mt-swipe-item>
		          <img src="../img/header_swiper/04.jpg" alt="">
		        </mt-swipe-item>
		        <mt-swipe-item>
		          <img src="../img/header_swiper/05.jpg" alt="">
		        </mt-swipe-item>
        	</mt-swipe>
    	</div>
	    <div class="cont_banner">
	        <img src="../img/header_swiper/newpeople.jpg" alt="">
	    </div>	
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
.sec_box{
	width:100%;
}
.header_banner{ 
  width:100%;
  height:161px;
}
.header_banner img{
  width:100%;
  height:100%;
}
.cont_banner{
  width:100%;
  height:80px;
}
.cont_banner img{
  width:100%;
  height:100%;
}
</style>
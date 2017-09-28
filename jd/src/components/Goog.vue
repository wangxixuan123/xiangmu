<template>
	<div>
	<div class="good">
		<div class="good_box">
			<dl>
				<dt><span>发现好货</span><span>发现品质生活</span></dt>
				<dd><img src="../img/product/01 (36).jpg" alt=""></dd>
			</dl>
			<dl>
				<dt><span>会买专辑</span><span>教你买买买</span></dt>
				<dd><img src="../img/product/01 (102).jpg" alt=""></dd>
			</dl>
			<dl>
				<dt><span>京东精选</span><span>精选中外美酒</span></dt>
				<dd><img src="../img/product/01 (133).jpg" alt=""></dd>
			</dl>
		</div>
		<div class="good_box">
			<dl>
				<dt><span>发现好货</span><span>发现品质生活</span></dt>
				<dd><img src="../img/product/01 (174).jpg" alt=""></dd>
			</dl>
			<dl>
				<dt><span>会买专辑</span><span>教你买买买</span></dt>
				<dd><img src="../img/product/01 (120).jpg" alt=""></dd>
			</dl>
			<dl>
				<dt><span>京东精选</span><span>精选中外美酒</span></dt>
				<dd><img src="../img/product/01 (185).jpg" alt=""></dd>
			</dl>
		</div>
	</div>
	<div class="guoqing">
      <img src="../img/header_swiper/big_banner.png" alt="">
    </div>

    </div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>
<style>
	.good{
		width:100%;
		background:#fff;
		border-bottom:1px solid #eee;
	}
	.good_box{
		width:100%;
		display:flex;
		border-top:1px solid #eee
	}
	.good_box dl{
		flex:1;
		border-left:1px solid #eee;
	}
	.good_box dl dt,.good_box dl dd{
		padding:5px 0px 5px 10px;
	}
	.good_box dl:nth-child(1){
		width:48%;
		border-left:none;
	}
	.good_box dl:nth-child(1) dd{
		margin-left:40px;
	}
	.good_box dl:nth-child(2),.good_box dl:nth-child(3){
		width:30%;
	}
	.good_box dl dt span{
		display: block;
	}
	.good_box dl dt span:nth-child(1){
		color:#d36335;
	}
	.good_box dl dt span:nth-child(2){
		font-size:12px;
	}
	.good_box dl dd img{
		width:50px;
		height:60px;
	}
	.guoqing{
	    width:100%;
	    height:308px;
	    background: #fff;
	    margin-top:8px;
	}
	.guoqing img{
	   width:100%;
	   height:100%
	}
</style>
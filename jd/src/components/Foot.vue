<template>
	<footer class="foot">
		<ul>
			<li><img src="../img/footer/a-recommend.png" alt=""></li>
			<li><img src="../img/footer/n-catergry.png" alt=""></li>
			<li><img src="../img/footer/n-find.png" alt=""></li>
			<li><img src="../img/footer/n-cart.png" alt=""></li>
			<li><img src="../img/footer/n-me.png" alt=""></li>
		</ul>
	</footer>
</template>
<script>
	export default{

	}
</script>
<style>
	.foot{
  width:100%;
  height:.45rem;
  background:#fff;
  position:fixed;
  bottom: 0px;
  z-index: 9999;
}
.foot ul{
  display:flex;
}
.foot ul li{
  flex:1;
  text-align:center;
}
.foot ul li img{
  width:55px;
  height:40px;
}
</style>
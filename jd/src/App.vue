<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  
}
</script>

<style>
@import "fonts/font-awesome.min.css";
@import "css/reset.css";
@import "css/common.css";
#app {
  width:100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  background:#f5f5f5;
}
</style>

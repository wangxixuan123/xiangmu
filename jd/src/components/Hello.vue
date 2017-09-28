<template>
  <div class="hello">
    <header class="head" id="head">
      <p><i class="fa fa-barcode"></i><span>扫啊扫</span></p>
      <p><i class="fa fa-search"></i><input type="text" placeholder="京东生鲜超级极品类日"></p>
      <p><i class="fa fa-comment-o"></i><span>消息</span></p>
    </header>
    <navs :datas="data"></navs>
    <foot></foot>
  </div>
</template>

<script>
import navs from './Navs'
import foot from './Foot'
import {mapState,mapMutations,mapActions} from "vuex"
export default {
  name: 'hello',
  data () {
    return {
     
    }
  },
  computed:mapState(["data"]),
  created(){
      this.getdata(this)
    },
  methods:{
    ...mapActions(["getdata"])
  },
  components: {
    navs,
    foot
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  width:100%;
 /* position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  background:#f5f5f5;*/

}
.head{
  width:100%;
  height:.45rem;
  display:flex;
  text-align:center;
  font-size:12px;
  position: fixed;
  top:0px;
  z-index: 9999;
}
.head p:nth-child(2){
  flex:1;
  margin-top:8px;
  height:.3rem;
  border-radius:14px;
  background:#fff;
  /*position: relative;*/
}
.head p:nth-child(2) i{
  font-size:.15rem;
  color:#999;
 /* position: absolute;
  left:10px;
  top:8px;*/
}
.head p:nth-child(2) input{
  height:.28rem;
  border:none;
  outline:none;
  padding-left:5px;
}
.head p:nth-child(1){
  padding:5px 10px 0px 10px;
  color:#CFCFCA;
}
.head p:nth-child(1) span,.head p:nth-child(3) span{
  display:block;
}
.head p:nth-child(1) i,.head p:nth-child(3) i{
  font-size:.16rem;
}
.head p:nth-child(3){
  padding:5px 10px 0px 10px;
  color:#CFCFCA;
}




</style>

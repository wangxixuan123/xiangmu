// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import jquery from 'jquery'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import Vuex from "vuex"
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
Vue.use(Vuex)
Vue.use(Mint)
Vue.use(VueAxios,axios)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
// var tool={
// 	install:function(Vue){
// 		Object.defineProperty(Vue.Prototype, "$", {
// 			value:jquery
// 		})
// 	}
// }
// Vue.use(tool);
let store=new Vuex.Store({
	state:{
		data:null
	},
	actions:{
		getdata({commit},_this){
			_this.axios.get("/data").then(function(res){
				console.log(res.data);
				commit("getjson",res.data)
			})
		}
	},
	mutations:{
		getjson(state,data){	
			state.data=data;
		},
	}
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

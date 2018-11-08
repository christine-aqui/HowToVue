import Vue from 'vue';
import App from './App.vue';
import store from './store';

//  createElement was shorten to h
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
import Vue from 'vue';
import App from './App.vue';

//  createElement was shorten to h
new Vue({
  render: h => h(App)
}).$mount('#app');
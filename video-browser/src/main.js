import Vue from 'vue';
import App from './App.vue';

//  createElement was shorten to h
new Vue({
  el: '#app',
  render: h => h(App)
});
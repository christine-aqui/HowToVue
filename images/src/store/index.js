//  init for vueX
import Vuex from 'vuex';
import Vue from 'vue';

// tell vue to load vuex as a 'middleware' additional module
Vue.use(Vuex);

// create a new vuex store
// Vuex.store is a overall collection of modules, state, getters and methods..
export default new Vuex.Store({
  modules: {}
});
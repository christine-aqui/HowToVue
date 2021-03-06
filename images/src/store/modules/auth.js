// state to track a token
// getter: function to check is state is not null ( logged in)
// mutation: updates the state
// actions: gets the token that comes back from the oauth ... this calls the mutation to update the state| logout action ... this calls the mutation to set the state | login action

import  api from '../../api/imgur';

const state = {
  token: null,
};

const getters = {
  // note that the state object here is an argument to the function
  // !! turns a value into a boolean
  isLoggedIn: (state) => !!state.token
};

// commit is used to call a mutations that has been defined.
const actions = {
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    commit('setToken', null); // here we call the setToken and pass the null value to it.
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
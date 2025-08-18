import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null // logged-in user info
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  }
});

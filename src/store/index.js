import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import currency from "@/store/modules/currency";

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    currency: currency
  }
})

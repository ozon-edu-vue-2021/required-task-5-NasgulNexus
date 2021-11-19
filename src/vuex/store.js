import Vue from "vue";
import Vuex from "vuex";

import commonActions from "./actions/actions";
import actionsApiRequest from "./actions/actionsAPI-Request";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = { ...commonActions, ...actionsApiRequest };

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    select: []
  },
  mutations,
  actions,
  getters
});

export default store;

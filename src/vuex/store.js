import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    select: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      product.quantity++;
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(item => {
          if (item.id === product.id) {
            isProductExists = true;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    SET_SELECT: (state, product) => {
      product.select = true;
      if (state.select.length) {
        let isProductExists = false;
        state.select.map(item => {
          if (item.id === product.id) {
            isProductExists = true;
          }
        });
        if (!isProductExists) {
          state.select.push(product);
        }
      } else {
        state.select.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart[index].quantity = 0;
      state.cart.splice(index, 1);
    },
    REMOVE_FROM_SELECT: (state, index) => {
      state.select[index].select = false;
      state.select.splice(index, 1);
    },
    DICREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    REMOVE_SELECT_CATALOG: (state, product) => {
      product.select = false;
      state.select.map((item, index) => {
        if (item.id === product.id) {
          state.select.splice(index, 1);
        }
      });
    },
    REMOVE_TO_CART_CATALOG: (state, product) => {
      product.quantity = 0;
      state.cart.map((item, index) => {
        if (item.id === product.id) {
          state.cart.splice(index, 1);
        }
      });
    },
    INCREMENT_QANTITY: (state, product) => {
      if (state.cart.length) {
        state.cart.map(item => {
          if (item.id === product.id) {
            product.quantity++;
          }
        });
      }
    },
    DICREMENT_QANTITY: (state, product) => {
      if (state.cart.length) {
        state.cart.map(item => {
          if (item.id === product.id && item.quantity > 1) {
            product.quantity--;
          }
        });
      }
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("https://random-data-api.com/api/food/random_food?size=30", {
        method: "GET"
      })
        .then(products => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    ADD_TO_SELECT({ commit }, product) {
      commit("SET_SELECT", product);
    },
    REMOVE_SELECT({ commit }, product) {
      commit("REMOVE_SELECT_CATALOG", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    DELETE_FROM_SELECT({ commit }, index) {
      commit("REMOVE_FROM_SELECT", index);
    },
    INCREMENT_QUANTITY({ commit }, index) {
      commit("INCREMENT", index);
    },
    DICREMENT_QANTITY({ commit }, index) {
      commit("DICREMENT", index);
    },
    REMOVE_TO_CART({ commit }, product) {
      commit("REMOVE_TO_CART_CATALOG", product);
    },
    INCREMENT_QANTITY_CATALOG({ commit }, product) {
      commit("INCREMENT_QANTITY", product);
    },
    DICREMENT_QANTITY_CATALOG({ commit }, product) {
      commit("DICREMENT_QANTITY", product);
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    SELECT(state) {
      return state.select;
    }
  }
});
export default store;

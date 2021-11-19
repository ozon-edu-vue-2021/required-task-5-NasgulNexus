//card actions
export const DELETE_FROM_CART = "deleteFromCart";
export const INCREMENT_QUANTITY = "incrementQuantity";
export const DICREMENT_QANTITY = "dicrement_qantity";
//select actions
export const DELETE_FROM_SELECT = "deleteFromSelect";
//catalogItems actions
export const ADD_TO_CART = "addToCart";
export const ADD_TO_SELECT = "addToSelect";
export const REMOVE_SELECT = "removeToSelect";
export const REMOVE_TO_CART = "removeToCart";
export const INCREMENT_QANTITY_CATALOG = "incrementQuantityCatalog";
export const DICREMENT_QANTITY_CATALOG = "dicrementQuantityCatalog";

export default {
  //catalogItems
  ADD_TO_CART({ commit }, product) {
    commit("SET_CART", product);
  },
  ADD_TO_SELECT({ commit }, product) {
    commit("SET_SELECT", product);
  },
  REMOVE_SELECT({ commit }, product) {
    commit("REMOVE_SELECT_CATALOG", product);
  },
  REMOVE_TO_CART({ commit }, product) {
    commit("REMOVE_TO_CART_CATALOG", product);
  },
  INCREMENT_QANTITY_CATALOG({ commit }, product) {
    commit("INCREMENT_QANTITY", product);
  },
  DICREMENT_QANTITY_CATALOG({ commit }, product) {
    commit("DICREMENT_QANTITY", product);
  },
  //cart
  DELETE_FROM_CART({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
  INCREMENT_QUANTITY({ commit }, index) {
    commit("INCREMENT", index);
  },
  DICREMENT_QANTITY({ commit }, index) {
    commit("DICREMENT", index);
  },
  //select
  DELETE_FROM_SELECT({ commit }, index) {
    commit("REMOVE_FROM_SELECT", index);
  }
};

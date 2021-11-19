export const DELETE_FROM_CART = "deleteFromCart";
export const INCREMENT_QUANTITY = "incrementQuantity";
export const DICREMENT_QANTITY = "dicrement_qantity";
export default {
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
};

import axios from "axios";
export const GET_PRODUCTS_FROM_API = "getProductFromAPI";

export default {
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
  }
};

import Vue from "vue";
import Router from "vue-router";
import Catalog from "../components/catalog/catalog";
import Cart from "../components/cart/cart";
import SelectMenu from "../components/select/selectMenu";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: Catalog
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      props: true
    },
    {
      path: "/selectMenu",
      name: "selectMenu",
      component: SelectMenu,
      props: true
    }
  ]
});

export default router;

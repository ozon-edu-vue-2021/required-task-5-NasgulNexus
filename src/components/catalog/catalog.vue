<template>
  <div class="catalog">
    <div class="catalog__name">
      <p>Каталог товаров</p>
    </div>
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="catalog__link_to_cart">Корзина: {{ CART.length }}</div>
    </router-link>
    <router-link :to="{ name: 'selectMenu', params: { select_data: SELECT } }">
      <div class="catalog__link_to_select">Избранное: {{ SELECT.length }}</div>
    </router-link>
    <div class="catalog__content">
      <CatalogItems
        v-for="product in PRODUCTS"
        :key="product.id"
        v-bind:product_data="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItems from "./catalogItems";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "catalog",
  components: {
    CatalogItems
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "SELECT"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(response => {
      if (!response.data) {
        console.log("Error");
      }
    });
  }
};
</script>

<style>
.catalog {
  margin-top: 50px;
}
.catalog__name {
  position: absolute;
  top: 1px;
  left: 20px;
  padding: 16px;
  font-size: 30px;
}
.catalog__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
}
.catalog__link_to_cart {
  position: absolute;
  top: 35px;
  right: 10px;
  padding: 16px;
  font-size: 24px;
  border: solid 1x #aeaeae;
}
.catalog__link_to_select {
  position: absolute;
  top: 35px;
  right: 150px;
  padding: 16px;
  font-size: 24px;
  border: solid 1x #aeaeae;
}
</style>

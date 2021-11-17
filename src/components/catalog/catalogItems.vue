<template>
  <div class="catalogItems">
    <b-icon
      v-if="!product_data.select"
      class="catalogItems__icon"
      icon="suit-heart"
      style="color: red"
      font-scale="1.5"
      @click="addToSelect"
    ></b-icon>
    <b-icon
      v-if="product_data.select"
      icon=" suit-heart-fill"
      style="color: red"
      font-scale="1.5"
      @click="removeToSelect"
    ></b-icon>
    <span class="catalogItems__name">{{ product_data.dish }}</span>
    <img :src="images.icon" class="catalogItems_images" alt="img" />
    <p class="catalogItems__price">Цена: {{ product_data.price }} рублей</p>
    <p v-if="product_data.quantity > 0" class="catalogItems__qantity">
      Количество товара: {{ product_data.quantity }}
      <button
        v-if="product_data.quantity > 0"
        class="qauntity__button_increment_catalog"
        @click="incrementQuantityCatalog"
      >
        +
      </button>
      <button
        v-if="product_data.quantity > 1"
        class="qauntity__button_dicrement_catalog"
        @click="dicrementQuantityCatalog"
      >
        -
      </button>
    </p>
    <button class="catalogItems__button" @click="addToCart">
      Добавить товар в корзину
    </button>
    <button
      v-if="product_data.quantity > 0"
      class="catalogItems__button"
      @click="removeToCart"
    >
      Удалить товар из корзины
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CatalogItems",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    images() {
      return {
        ...this.product_data,
        icon:
          this.product_data.image &&
          require(`../../assets/images/${this.product_data.image}`)
      };
    }
  },
  methods: {
    ...mapActions([
      "ADD_TO_CART",
      "ADD_TO_SELECT",
      "REMOVE_SELECT",
      "REMOVE_TO_CART",
      "INCREMENT_QANTITY_CATALOG",
      "DICREMENT_QANTITY_CATALOG"
    ]),
    addToCart(data) {
      data = this.product_data;
      this.ADD_TO_CART(data);
    },
    addToSelect(data) {
      data = this.product_data;
      this.ADD_TO_SELECT(data);
    },
    removeToSelect(data) {
      data = this.product_data;
      this.REMOVE_SELECT(data);
    },
    removeToCart(data) {
      data = this.product_data;
      this.REMOVE_TO_CART(data);
    },
    incrementQuantityCatalog(data) {
      data = this.product_data;
      this.INCREMENT_QANTITY_CATALOG(data);
    },
    dicrementQuantityCatalog(data) {
      data = this.product_data;
      this.DICREMENT_QANTITY_CATALOG(data);
    }
  },
  mounted() {
    this.$set(this.product_data, "quantity", 0);
    this.$set(
      this.product_data,
      "price",
      Math.round(Math.random() * (1000 - 40) + 40)
    );
    let imagesRandom = Math.round(Math.random() * (12 - 1) + 1);
    let image = "";
    switch (imagesRandom) {
      case 1:
        image = "6123150777.webp";
        break;
      case 2:
        image = "6126039472.webp";
        break;
      case 3:
        image = "6126040354.webp";
        break;
      case 4:
        image = "6128597660.webp";
        break;
      case 5:
        image = "6134992334.webp";
        break;
      case 6:
        image = "6136170572.webp";
        break;
      case 7:
        image = "6136172483.webp";
        break;
      case 8:
        image = "6140906765.webp";
        break;
      case 9:
        image = "6142673815.webp";
        break;
      case 10:
        image = "6142681673.webp";
        break;
      case 11:
        image = "6142683276.webp";
        break;
      case 12:
        image = "6148226736.webp";
        break;
    }
    this.$set(this.product_data, "image", image);
    this.$set(this.product_data, "select", false);
  }
};
</script>

<style>
.catalogItems {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
}
.catalogItems__name {
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 18px;
}
.catalogItems_images {
  width: 100%;
}
.catalogItems__select {
  color: hotpink;
}
.catalogItems__button {
  display: block;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  margin-left: 16%;
  margin-top: 5px;
  font-size: 16px;
}
.qauntity__button_increment_catalog {
  cursor: pointer;
  margin: 10px;
  border: 0;
  background: white;
  font-size: 18px;
}
.qauntity__button_dicrement_catalog {
  cursor: pointer;
  margin: 10px;
  border: 0;
  background: white;
  font-size: 18px;
}
.catalogItems__icon {
  display: inline-block;
  cursor: pointer;
}
</style>

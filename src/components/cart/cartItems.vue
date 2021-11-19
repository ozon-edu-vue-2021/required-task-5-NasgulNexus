<template>
  <div class="cartItems">
    <img :src="images.icon" class="cartItems_images" alt="img" />
    <p class="cartItems__name">{{ cart_item_data.dish }}</p>
    <p class="cartItems__price">Цена: {{ cart_item_data.price }} рублей</p>
    <div class="cartItems__quantity">
      Количество товара:
      {{ cart_item_data.quantity }}
    </div>
    <button class="qauntity__button_increment" @click="incrementQuantity">
      +
    </button>
    <button class="qauntity__button_dicrement" @click="dicrementQuantity">
      -
    </button>
    <button class="deleteFromCart" @click="deleteFromCart">
      Удалить из корзины
    </button>
  </div>
</template>

<script>
export default {
  name: "cartItems",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    images() {
      return {
        ...this.cart_item_data,
        icon:
          this.cart_item_data.image &&
          require(`../../assets/images/${this.cart_item_data.image}`)
      };
    }
  },
  methods: {
    dicrementQuantity() {
      this.$emit("dicrementQuantity");
    },
    incrementQuantity() {
      this.$emit("incrementQuantity");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    }
  }
};
</script>

<style>
.cartItems {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0;
  background: white;
  padding: 16px;
  margin-bottom: 16px;
}
.cartItems__name {
  font-size: 18px;
}
.cartItems__price {
  font-size: 18px;
}
.cartItems__quantity {
  font-size: 18px;
}
.qauntity__button_increment {
  cursor: pointer;
  margin: 10px;
  border: 0;
  background: white;
  font-size: 18px;
}
.qauntity__button_dicrement {
  cursor: pointer;
  margin: 10px;
  border: 0;
  background: white;
  font-size: 18px;
}
.cartItems_images {
  width: 18%;
}
.deleteFromCart {
  cursor: pointer;
  border-radius: 10px;
  background: white;
  border: 0;
  font-size: 18px;
}
</style>

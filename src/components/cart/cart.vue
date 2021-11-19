<template>
  <div class="cart">
    <h1 class="cart__name">Корзина</h1>
    <router-link :to="{ name: 'catalog' }">
      <div class="cart__in_to_catalog">Вернуться к каталогу</div>
    </router-link>
    <div v-if="!cart_data.length">В корзине ничего нет</div>
    <cartItems
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @incrementQuantity="incrementQuantity(index)"
      @dicrementQuantity="dicrementQuantity(index)"
    />
    <div class="cart__content"></div>
    <div v-if="cartTotalCost > 0" class="cart__total">
      <p class="cart__total__name">Всего</p>
      <p>{{ cartTotalCost }} рублей</p>
      <button
        v-if="cartTotalCost > 0"
        class="cart__checkout"
        @click="clickButtonCheckout"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script>
import cartItems from "./cartItems";
import {
  DELETE_FROM_CART,
  INCREMENT_QUANTITY,
  DICREMENT_QANTITY
} from "../../vuex/actions/actions";

export default {
  name: "cart",
  components: {
    cartItems
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    cartTotalCost() {
      return this.cart_data.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    }
  },
  methods: {
    clickButtonCheckout() {
      let checkout = "";
      for (let item of this.cart_data) {
        checkout =
          checkout + `Товар ${item.dish} в количетсве: ${item.quantity};\n `;
      }
      alert(checkout);
    },
    incrementQuantity(index) {
      this.$store.dispatch("INCREMENT_QUANTITY", index);
    },
    dicrementQuantity(index) {
      this.$store.dispatch("DICREMENT_QANTITY", index);
    },
    deleteFromCart(index) {
      this.$store.dispatch("DELETE_FROM_CART", index);
    }
  }
};
</script>

<style>
.cart {
  margin-top: 50px;
}
.cart__name {
  position: absolute;
  top: 1px;
  left: 20px;
  padding: 16px;
  font-size: 30px;
}
.cart__content {
  margin-top: 100px;
  height: 1px;
}
.cart__in_to_catalog {
  position: absolute;
  top: 20px;
  right: 10px;
  padding: 16px;
  border: solid 1x #aeaeae;
  font-size: 24px;
}
.cart__checkout {
  cursor: pointer;
  margin-left: 40px;
  border: 0;
  background: blue;
  color: #ffffff;
  font-size: 24px;
}

.cart__total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 24;
  display: flex;
  justify-content: center;
  background: blue;
  color: #ffffff;
  font-size: 24px;
}
.cart__total__name {
  margin-right: 8px;
}
</style>

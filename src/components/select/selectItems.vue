<template>
  <div class="selectItems">
    <img :src="images.icon" class="cartItems_images" alt="img" />
    <p class="selectItems__name">{{ select_items_data.dish }}</p>
    <p class="selectItems__price">Цена: {{ select_items_data.price }} рублей</p>
    <button @click="daleteFromSelect">Убрать из избранного</button>
  </div>
</template>

<script>
export default {
  name: "selectItems",
  props: {
    select_items_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    images() {
      return {
        ...this.select_items_data,
        icon:
          this.select_items_data.image &&
          require(`../../assets/images/${this.select_items_data.image}`)
      };
    }
  },
  methods: {
    daleteFromSelect() {
      this.$emit("daleteFromSelect");
    }
  }
};
</script>

<style>
.selectItems {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
}
</style>

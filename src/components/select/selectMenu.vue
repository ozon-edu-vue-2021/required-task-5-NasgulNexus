<template>
  <div class="select">
    <div class="select__name">Избранное</div>
    <router-link :to="{ name: 'catalog' }">
      <div class="select__in_to_catalog">Вернуться к каталогу</div>
    </router-link>
    <div v-if="!select_data.length">В избранном ничего нет</div>
    <selectItems
      v-for="(item, index) in select_data"
      :key="item.id"
      :select_items_data="item"
      @daleteFromSelect="daleteFromSelect(index)"
    />
  </div>
</template>

<script>
import selectItems from "./selectItems";
import { mapActions } from "vuex";

export default {
  name: "selectMenu",
  components: {
    selectItems
  },
  props: {
    select_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(["DELETE_FROM_SELECT"]),
    daleteFromSelect(index) {
      this.DELETE_FROM_SELECT(index);
    }
  }
};
</script>

<style>
.select {
  margin-top: 50px;
}
.select__in_to_catalog {
  position: absolute;
  top: 20px;
  right: 10px;
  padding: 16px;
  border: solid 1x #aeaeae;
  font-size: 24px;
}
.select__name {
  position: absolute;
  top: 1px;
  left: 20px;
  padding: 16px;
  font-size: 30px;
}
</style>

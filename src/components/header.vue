<template>
  <div class="header">
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "headerMenu"
};
</script>

<style>
.header {
  max-width: 900;
  margin: 0 auto;
}
</style>

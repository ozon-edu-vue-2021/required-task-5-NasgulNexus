<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 24px;
  box-sizing: border-box;
}
</style>

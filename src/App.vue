<template>
  <div>
    <router-view />
    <ul>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/fenlei">分类</router-link></li>
      <li><router-link to="/cart">购物车</router-link></li>
      <li><router-link to="/mine">我的</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    console.log(process.env.VUE_APP_BASE_API);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

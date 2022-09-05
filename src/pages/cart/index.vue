<template>
  <div class="cart">
    <h3>购物车</h3>
    <p>{{ aa }}---{{ bb }}</p>
    <p>{{ num }}</p>
    <button @click="change">修改</button>
    <p>{{ name }}</p>
    <button @click="changename">改变名字</button>
    <ul>
      <li
        v-for="item in state.products"
        :key="item._id"
        @click="godetail(item._id)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, watch, ref, onMounted, reactive } from "vue";
import axios from "axios";
import { useStore } from "vuex"; // 引入store
import { useRouter } from "vue-router";
export default {
  setup() {
    // 入口函数
    const store = useStore(); // 使用vuex里面的store
    let router = useRouter();
    let num = ref(10);
    let state = reactive({
      products: [],
    });
    let aa = computed(() => 123);
    let name = computed(() => store.state.user.user.name);
    let bb = computed(() => 456);
    function change() {
      num.value += 1;
    }
    async function initProducts() {
      const result = await axios.get(
        "http://lanlianhua.work:3009/api/v1/products"
      );
      state.products = result.data.products;
    }
    function godetail(id) {
      router.push("/detail/" + id);
      // this.$router.push({
      //   path:'',
      //   query:{}
      // })
    }
    watch(num, (newval, oldval) => {
      console.log(newval, oldval);
    });
    onMounted(async () => {
      initProducts();
    });
    return {
      aa,
      bb,
      num,
      name,
      // ...toRefs(products),
      state,
      change,
      godetail,
      changename: () => {
        store.commit("setuser", "刘德华");
      },
    };
  },
};
// options api   2
// component api  3
</script>
<style scoped></style>

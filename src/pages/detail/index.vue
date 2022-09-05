<template>
  <div class="detail">
    <h3>详情页</h3>
    <p>{{ state.detail }}</p>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const route = useRoute();
    const state = reactive({
      detail: {},
    });
    console.log(route.params.id);
    async function loadDetail(id) {
      const result = await axios.get(
        `http://lanlianhua.work:3009/api/v1/products/${id}`
      );
      console.log(result);
      state.detail = result.data;
    }
    onMounted(() => {
      loadDetail(route.params.id);
    });
    return { state };
  },
};
</script>
<style scoped></style>

<template>
  <div>
    <div v-for="(item, i) in ask" :key="i">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api";
export default {
  name: "AskView",
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.ask = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>

<template>
  <div>
    <div v-for="(ask, i) in asks" :key="i">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api";
export default {
  name: "AskView",
  data() {
    return {
      asks: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.asks = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>

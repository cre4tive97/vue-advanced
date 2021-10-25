<template>
  <div>
    <div v-for="(item, i) in ask" :key="i">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AskView",
  computed: {
    ...mapState(["ask"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>

<template>
  <div>
    <div v-for="(item, i) in fetchedAsk" :key="i">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AskView",
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>

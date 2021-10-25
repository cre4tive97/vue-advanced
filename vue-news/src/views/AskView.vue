<template>
  <div>
    <p v-for="(ask, i) in fetchedAsk" :key="i">
      <a v-bind:href="ask.url">{{ ask.title }}</a>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
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

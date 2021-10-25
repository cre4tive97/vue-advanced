<template>
  <div>
    <p v-for="(ask, i) in fetchedAsk" :key="i">
      <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
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

<template>
  <div>
    <div v-for="(news, i) in fetchedNews" :key="i">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsView",
  computed: {
    ...mapGetters(["fetchedNews"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>

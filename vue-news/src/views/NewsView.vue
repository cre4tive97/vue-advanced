<template>
  <div>
    <div v-for="(news, i) in news" :key="i">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NewsView",
  computed: {
    ...mapState(["news"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>

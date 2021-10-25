<template>
  <div>
    <div v-for="(news, i) in this.$store.state.news" :key="i">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>

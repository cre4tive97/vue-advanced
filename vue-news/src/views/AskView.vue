<template>
  <div>
    <div v-for="(item, i) in $store.state.ask" :key="i">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: "AskView",

  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>

<template>
  <div>
    <div v-for="(job, i) in $store.state.jobs" :key="i">{{ job.title }}</div>
  </div>
</template>

<script>
export default {
  name: "JobsView",

  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>

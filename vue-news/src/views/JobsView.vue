<template>
  <div>
    <p v-for="(jobs, i) in fetchedJobs" :key="i">
      <a v-bind:href="jobs.url">{{ jobs.title }}</a>
      <small>{{ jobs.time_ago }}, {{ jobs.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "JobsView",
  computed: {
    ...mapGetters(["fetchedJobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>

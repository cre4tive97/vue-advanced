<template>
  <div>
    <div v-for="(job, i) in fetchedJobs" :key="i">
      {{ job.title }}
    </div>
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

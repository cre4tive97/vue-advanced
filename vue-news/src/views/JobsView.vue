<template>
  <div>
    <div v-for="(job, i) in jobs" :key="i">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "JobsView",
  computed: {
    ...mapState(["jobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>

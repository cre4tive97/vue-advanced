<template>
  <div>
    <div v-for="(job, i) in jobs" :key="i">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api";
export default {
  name: "JobsView",
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => (this.jobs = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>

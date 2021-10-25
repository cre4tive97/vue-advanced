<template>
  <div>
    <ul class="jobs-list">
      <li v-for="(jobs, i) in fetchedJobs" :key="i" class="post">
        <div class="points">
          {{ jobs.points }}
        </div>
        <div>
          <p class="jobs-title">
            <a v-bind:href="jobs.url">{{ jobs.title }}</a>
          </p>
          <small class="link-text">
            {{ jobs.time_ago }} from
            <router-link :to="`/user/${jobs.user}`" class="link-text">
              {{ jobs.domain }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
.jobs-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.jobs-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>

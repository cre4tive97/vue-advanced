<template>
  <div>
    <ListItem />
    <!-- <ul class="jobs-list">
      <li v-for="(jobs, i) in fetchedJobs" :key="i" class="post">
        <div class="points">
          0
        </div>
        <div>
          <p class="jobs-title">
            <a v-bind:href="jobs.url">{{ jobs.title }}</a>
          </p>
          <small class="link-text">
            {{ jobs.time_ago }} from
            <a :href="`https://www.${jobs.domain}`">{{ jobs.domain }}</a>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
  name: "JobsView",
  components: {
    ListItem,
  },
};
</script>

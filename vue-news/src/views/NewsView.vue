<template>
  <div>
    <div v-for="(user, i) in users" :key="i">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>

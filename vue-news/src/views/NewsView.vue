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
        console.log(response.data);
        this.users = response.data;
        console.log(this.users);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>

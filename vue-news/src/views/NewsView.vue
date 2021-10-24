<template>
  <div>
    <div v-for="(user, i) in users" :key="i">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios
      .get("https://api.hnpwa.com/v0/news/1.json")
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

<template>
  <div>
    <p>Username : {{ fetchedUser.id }}</p>
    <p>Karma : {{ fetchedUser.karma }}</p>
    <p>Created : {{ fetchedUser.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserView",
  computed: {
    ...mapGetters(["fetchedUser"]),
  },
  created() {
    const userName = this.$route.params.id;
    console.log(this.$route.params.id);
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>

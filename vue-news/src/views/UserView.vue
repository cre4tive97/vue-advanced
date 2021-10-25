<template>
  <div>
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  name: "UserView",
  components: {
    UserProfile,
  },

  created() {
    const userName = this.$route.params.id;
    console.log(this.$route.params.id);
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>

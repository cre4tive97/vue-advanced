<template>
  <div>
    <UserProfile>
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ `Joined ${userInfo.created}` }}, </span>
      <span slot="karma">{{ userInfo.karma }} Karma</span>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  name: "UserView",
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    console.log(this.$route.params.id);
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>

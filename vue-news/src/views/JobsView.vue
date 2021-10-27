<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
import bus from "../utils/bus";
import ListItem from "../components/ListItem.vue";
export default {
  name: "JobsView",
  components: {
    ListItem,
  },
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_JOBS")
      .then(() => {
        console.log("fetched");
        bus.$emit("end:spinner");
      })
      .catch((error) => console.log(error));
  },
};
</script>

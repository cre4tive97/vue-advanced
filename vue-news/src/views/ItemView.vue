<template>
  <div>
    <p>{{ fetchedItem.title }}</p>
    <p>{{ fetchedItem.user }}</p>
    <div>{{ fetchedItem.content }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ItemView",
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style></style>

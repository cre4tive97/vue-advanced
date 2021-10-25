<template>
  <div>
    <ul class="ask-list">
      <li v-for="(ask, i) in fetchedAsk" :key="i" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="ask-title">
            <a v-bind:href="ask.url">{{ ask.title }}</a>
          </p>
          <small class="link-text">
            {{ ask.time_ago }} by
            <router-link :to="`/user/${ask.user}`" class="link-text">
              {{ ask.user }}
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
  name: "AskView",
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style scoped>
.ask-list {
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
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>

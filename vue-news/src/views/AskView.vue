<template>
  <div>
    <ListItem />
    <!-- <ul class="ask-list">
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
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";

export default {
  name: "AskView",
  components: { ListItem },
};
</script>

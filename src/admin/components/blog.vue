<template lang="pug">
  .container.container_blog
    h2.content__title Страница "Блог"
    .content-wrap
      add-article
      last-articles
</template>

<script>
import addArticle from "./blog/addArticle.vue";
import lastArticles from "./blog/lastArticles.vue";

import { mapState } from "vuex";
export default {
  components: {
    addArticle,
    lastArticles
  },

  computed: {
    ...mapState({
      active: state => state.articles.active
    })
  },
  created() {
    let id = this.$store.state.user.id;

    this.$store.dispatch("articles/getArticlesData", id);

    this.active.activeClass = true;
  },
  destroyed() {
    this.active.activeClass = false;
  }
};
</script>
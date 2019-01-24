<template lang="pug">
  #root
    .header
      app-header
    .tabs
      tabs
    .content

</template>

<script>
import header from './components/header.vue';
import tabs from './components/tabs.vue';
import skills from './components/skills.vue';

export default {
  components: {
    appHeader: header,
    tabs,
    skills
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700&subset=cyrillic");

html {
  font-size: 16px;
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

body,
html {
  margin: 0;
  height: 100%;
}

body {
  font-family: 'Roboto', Helvetica, sans-serif;
  line-height: 1.42;
  color: $text-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

* {
  box-sizing: border-box;
}

#root {
  background: url('./images/admin-bg.png') center center / cover no-repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
}

// .header {
//   height: 80px;
// }

// .tabs {
//   height: 60px;
// }


</style>


<template lang="pug">
  #root
    .header
      app-header
    .tabs
      tabs
    .content
      router-view
    .enter__form
      input(v-model="enter.name" label="Name")
      input(type="password" v-model="enter.password" label="Password")
      button(@click="handleEnter")  Войти
</template>

<script>
import axios from "axios";

import header from "./components/header.vue";
import tabs from "./components/tabs.vue";
import skills from "./components/skills.vue";
import blog from "./components/blog.vue";
import works from "./components/works.vue";

export default {
  components: {
    appHeader: header,
    tabs,
    skills,
    blog,
    works
  },
  data: () => ({
    enter: { name: "", password: "" }
  }),
  mounted() {},
  methods: {
    handleEnter() {
      axios.post("https://webdev-api.loftschool.com/login", this.enter).then(
        response => {
          console.log(response);
          if (response.status == 200) {
            localStorage.setItem("token", response.data.token);
          }
        },
        error => {
          console.error(error);
        }
      );
    }
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
  font-family: "Roboto", Helvetica, sans-serif;
  line-height: 1.42;
  color: $text-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
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
  background: url("./images/admin-bg.png") center center / cover no-repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  height: 100%;
  width: 100%;
  background-color: rgba(#fff, 0.8);
  padding: 0 30px;
}
</style>


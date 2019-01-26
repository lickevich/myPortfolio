import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from "axios";

Vue.use(VueRouter);

import skills from "./components/skills.vue";
import works from "./components/works.vue";
import blog from "./components/blog.vue";

const routes = [
    {
      path: '/admin',
      component: skills
    },
    {
      path: '/admin/blog',
      component: blog
    },
    {
      path: '/admin/works',
      component: works
    }
  ];

export default new VueRouter({ routes });

// mode: 'history'  // Убрать # из url.
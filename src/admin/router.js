import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from "axios";
import store from "./store";

Vue.use(VueRouter);

import skills from "./components/skills.vue";
import works from "./components/works.vue";
import blog from "./components/blog.vue";

const routes = [
    {
      path: '/admin',
      component: skills,
      meta: {
        public: true
      }
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

const router = new VueRouter({ routes });
const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
})

router.beforeEach((to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserAuthorized = store.state.user.isAuth;

  if (isPublicRoute == false && isUserAuthorized == false) {
    guard.get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      next();
    }).catch(error => {
      window.location('https://rlickevich.github.io/myPortfolio/');
      localStorage.removeItem('token');
    })
  } else {
    next();
  }
})

export default router;

// mode: 'history'  // Убрать # из url.
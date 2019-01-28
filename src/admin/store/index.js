import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import skills from "./modules/skills";
import works from "./modules/works";
import user from "./modules/user";
import articles from "./modules/articles";

export const store = new Vuex.Store({
    modules: { skills, works, user, articles }
});
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import menu from './modules/menu';
import article from './modules/article';
import login from './modules/login';
import add from './modules/add';
Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

const allModules = [menu, article, login, add];
const state = {};
const mutations = {};
allModules.forEach((module) => {
    Object.keys(module).forEach((key) => {
        if (key === 'state'){
            Object.keys(module.state).forEach((k) => {
                state[k]=module[key][k];
            });
        }
        if (key === 'mutations'){
            if (!module || !module.mutations) return;
            Object.keys(module.mutations).forEach((name) => {
                mutations[name] = module.mutations[name];
            });
        }
    });
});
export default new Vuex.Store({
    state,
    mutations,
    strict: debug,
    middlewares: debug ? [createLogger()] : []
});

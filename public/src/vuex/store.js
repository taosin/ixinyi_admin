import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import menu from './modules/menu';
import cusomer from './modules/cusomer';
import provider from './modules/provider';
Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

const allModules = [menu, cusomer, provider];
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

import Vue from 'vue';
import Router from 'vue-router';
import {
    sync
} from 'vuex-router-sync';
import store from './vuex/store';
import App from './App.vue';
import filters from './filter';
import index from './views/index.vue';
import articlelist from './views/article_list.vue';
window.Vue = Vue;
Vue.use(Router);
const router = new Router({
    hashbang: false,
    history: false,
    saveScrollPosition: true
});
window.router = router;

Object.keys(filters).forEach((k) => {
    Vue.filter(k, filters[k]);
});

Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(require('./ext/vue_ext.js'));

router.map({
    '/': {
        name: 'index',
        component: index
    },
    '/index':{
        name:'index',
        component:index,
        subRoutes:{
            '/':{
                component:articlelist
            },
            '/articlelist':{
                component:articlelist
            }
            
        }
    }
});

// router.beforeEach(function(transition) {
//   transition.next()
// })
sync(store, router);
router.start(App, '#app');

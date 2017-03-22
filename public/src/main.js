import Vue from 'vue';
import Router from 'vue-router';
import {
    sync
} from 'vuex-router-sync';
import store from './vuex/store';
import App from './App.vue';
import filters from './filter';
import index from './views/index.vue';
import about from './views/about.vue';
import write from './views/write.vue';
import slogin from './views/login.vue';
import add from './views/add.vue';
import home from './views/home.vue';
import techs from './views/techs.vue';
import techDetail from './views/techDetail.vue';
import life from './views/life.vue';
import blogs from './views/blogs.vue';
import blog from './views/blog.vue';
import articlelist from './views/articlelist.vue';
import timeline from './views/timeline.vue';
import websites from './views/websites.vue';
import readline from './views/readLine.vue';
import messagebox from './views/messagebox.vue';
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
        name: 'index/blogs',
        component: blogs
    },
    '/index':{
        name:'index',
        component:index,
        subRoutes:{
            '/':{
                component:blogs
            },
            '/about':{
                component:about
            },
            '/home':{
                component:home
            },
            '/techs':{
                component:techs
            },
            '/techDetail':{
                component:techDetail
            },
            '/life':{
                component:life
            },
            '/blogs':{
                component:blogs
            },
            '/blog/:index/:aid/:date':{
                component:blog
            },
            '/timeline':{
                component:timeline
            },
            '/websites':{
                component:websites
            },
            '/readline':{
                component:readline
            },
            '/messagebox':{
               component:messagebox
            }
            
        }
    },
    '/control/':{
       name: 'slogin',
       component: slogin
    },
    '/control/write':{
       name: 'write',
       component: write
    },
    '/control/add':{
       name: 'add',
       component: add
    },
    '/control/articlelist':{
       name: 'articlelist',
       component: articlelist
    }
});

// router.beforeEach(function(transition) {
//   transition.next()
// })
sync(store, router);
router.start(App, '#app');


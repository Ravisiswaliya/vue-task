import Vue from 'vue'
import Router from 'vue-router'

import currency from './components/currency.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'currency',
            component: currency
        },
    ]
})
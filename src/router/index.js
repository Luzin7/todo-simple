import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Kanban from '@/views/kanban/Kanban'

Vue.use(Router)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Kanban',
        path: '/kanban',
        component: Kanban
    },
]

const router = new Router({ routes })

export default router
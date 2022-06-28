import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '球员首页'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
            }, {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '球员信息'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/BaseTable.vue")
            }, {
                path: "/charts",
                name: "basecharts",
                meta: {
                    title: ''
                },
                component: () => import ( /* webpackChunkName: "charts" */ "../views/BaseCharts.vue")
            }, {
                path: "/form",
                name: "baseform",
                meta: {
                    title: ''
                },
                component: () => import ( /* webpackChunkName: "form" */ "../views/BaseForm.vue")
            }, {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: '消息中心'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/Tabs.vue")
            }, {
                path: "/donate",
                name: "donate",
                meta: {
                    title: ''
                },
                component: () => import ( /* webpackChunkName: "donate" */ "../views/Donate.vue")
            }, {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '',
                    permission: true
                },
                component: () => import ( /* webpackChunkName: "permission" */ "../views/Permission.vue")
            }, {
                path: "/i18n",
                name: "i18n",
                meta: {
                    title: '语言切换'
                },
                component: () => import ( /* webpackChunkName: "i18n" */ "../views/I18n.vue")
            }, {
                path: "/upload",
                name: "upload",
                meta: {
                    title: ''
                },
                component: () => import ( /* webpackChunkName: "upload" */ "../views/Upload.vue")
            }, {
                path: "/icon",
                name: "icon",
                meta: {
                    title: '球星Logo'
                },
                component: () => import ( /* webpackChunkName: "icon" */ "../views/Icon.vue")
            }, {
                path: '/404',
                name: '404',
                meta: {
                    title: ''
                },
                component: () => import (/* webpackChunkName: "404" */ '../views/404.vue')
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: ''
                },
                component: () => import (/* webpackChunkName: "403" */ '../views/403.vue')
            }, {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/User.vue')
            }, {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: ''
                },
                component: () => import (/* webpackChunkName: "editor" */ '../views/Editor.vue')
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
Vue.use(Router)
import store from "../store"
let isLogin = store.state.login.cookies;
import prevent from "./prevent"
import home from "./home"
import task from "./task"
import admin from "./admin"
const router = new Router({
    mode: 'history',
    routes: [
        {
            path:"/",
            redirect:"/login"
        },
        {
            path: '/login',
            name: 'login',
            component: Login,

        },
        prevent,
        home,
        task,
        admin
    ]
})


router.beforeEach((to, from, next) => {
    //登录验证
    if( to.path =="/login" || to.meta.AuthToken ){
        next();
    }else{
        //跳转的路径:(路由跳转)
        next("/login") 
    }
  
  });

export default router;
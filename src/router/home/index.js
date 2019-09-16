import store from "../../store"
let isLogin = store.state.login.cookies;
export default {
    path: '/home',
    name: 'home',
    component: () =>import ('../../views/Home'),
        meta:{
            AuthToken:isLogin
        }
  
}
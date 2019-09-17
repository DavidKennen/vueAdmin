import store from "../../store"
let isLogin = store.state.login.cookies;
export default  {
    path: '/admin',
    name: 'admin',
    component: () =>import (  '../../views/Admin'),
    redirect:"/admin/option",
    meta:{
        AuthToken:isLogin
    },
    children:[
        {
            path:"option",
            component:()=>import("../../views/Admin/child/option"),
            name:"option",
            meta:{
                AuthToken:isLogin
            }
        },
        {
            path:"person",
            component:()=>import("../../views/Admin/child/person"),
            name:"person",
            meta:{
                AuthToken:isLogin
            }
        }
    ]
}
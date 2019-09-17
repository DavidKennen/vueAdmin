import store from "../../store"
let isLogin = store.state.login.cookies;
export default  {
    path: '/prevent',
    name: 'prevent',
    component: () =>import (  '../../views/Pre'),
    redirect:"/prevent/pre",
    meta:{
        AuthToken:isLogin
    },
    children:[
        {
            path:"revise",
            component:()=>import("../../views/Pre/child/revise"),
            name:"revise",
            meta:{
                AuthToken:isLogin
            }
        },
        {
            path:"monitor",
            component:()=>import("../../views/Pre/child/monitor"),
            name:"monitor",
            meta:{
                AuthToken:isLogin
            }
        },
        {
            path:"original",
            component:()=>import("../../views/Pre/child/original"),
            name:"original",
            meta:{
                AuthToken:isLogin
            }
        },
        {
            path:"pre",
            component:()=>import("../../views/Pre/child/pre"),
            name:"pre",
            meta:{
                AuthToken:isLogin
            }
        }
    ]
}
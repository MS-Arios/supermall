import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Shopcart = () => import("../views/shopcart/Shopcart.vue")
const Profile = () => import("../views/profile/Profile.vue")

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象并导出
export default new VueRouter({
    routes: [
        {
            path: "/",
            redirecet: "home"
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/category",
            component: Category
        },
        {
            path: "/shopcart",
            component: Shopcart
        },
        {
            path: "/profile",
            component: Profile
        }
    ],
    mode: "history"
})
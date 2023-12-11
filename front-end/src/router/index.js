import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GameView from "../views/GameView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import SearchView from "../views/SearchView.vue"
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"
import ForgotPasswordView from "../views/ForgotPasswordView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/cars/:id",
            name: "car",
            component: GameView,
            children: [
                {
                    path: "contact",
                    component: ContactView
                }
            ]
            
        },
        {
            path: "/search/:searchinput",
            name: "search",
            component: SearchView
            
        },
         {
            path: "/login",
            name: "login",
            component: LoginView
            
        },
         {
            path: "/register",
            name: "register",
            component: RegisterView
            
        },
         {
            path: "/forgot-password",
            name: "forgot-password",
            component: ForgotPasswordView
            
        },
        {
            path: "/:catchall(.*)*",
            name: "not-found",
            component: NotFoundView
        }
    ],

   
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }


});

export default router;
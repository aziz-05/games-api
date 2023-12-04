import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GameView from "../views/GameView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import SearchView from "../views/SearchView.vue"

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
            path: "/:catchall(.*)*",
            name: "not-found",
            component: NotFoundView
        }
    ]
});

export default router;
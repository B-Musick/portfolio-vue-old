import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from "../views/ProjectsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // However, this also means that the lifecycle hooks of the component will not be called.
      // https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    }
  ]
})

export default router

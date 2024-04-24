// https://nuxt.com/docs/guide/going-further/custom-routing#router-config
import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  // https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route
  routes: (_routes) => [
    {
      path: '/',
      component: () => import('~/pages/index.vue').then((r) => r.default || r),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('~/pages/404.vue').then((r) => r.default || r),
    },
    {
      path: '/wow/:pathMatch(.*)*',
      component: () =>
        import('~/pages/test/404.vue').then((r) => r.default || r),
    },
  ],
}

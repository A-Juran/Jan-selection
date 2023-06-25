/**
 * ipmlementing template routing configuration
 * through the Vue router plugin.
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routers'

//create routing
const router = createRouter({
  //routing mode hash
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router

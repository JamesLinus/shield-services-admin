import Collections from './components/collections.vue'
import Onboarding from './components/onboarding.vue'

// Errors
import NotFound from './components/errors/not-found.vue'

export function configRouter (router) {
  router.map({
    // Home page
    '/collections': {
      component: Collections
    },

    // About page
    '/onboarding': {
      component: Onboarding
    },

    // 404 Note Found handler
    '*': {
      component: NotFound
    }
  })

  // Redirects
  router.redirect({
    '/': '/collections'
  })
}

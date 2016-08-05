// Views
import CollectionsManage from './components/collections/CollectionsManage.vue'
import OnboardingAdd from './components/onboarding/OnboardingAdd.vue'
import OnboardingManage from './components/onboarding/OnboardingManage.vue'

// Errors
import NotFound from './components/errors/not-found.vue'

export function configRouter (router) {
  router.map({
    // Collections
    '/collections/manage': {
      component: CollectionsManage
    },

    // Onboarding
    '/onboarding/manage': {
      component: OnboardingManage
    },
    '/onboarding/add': {
      component: OnboardingAdd
    },

    // Errors
    '*': {
      component: NotFound
    }
  })

  // Redirects
  router.redirect({
    '/': '/collections/manage',
    '/collections': '/collections/manage',
    '/onboarding': '/onboarding/manage'
  })
}

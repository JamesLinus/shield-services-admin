<template lang="pug">
  #onboarding-manage.ui.two.colum.grid
    apps-list
    app-details
</template>

<script>
import AppsList from './AppsList.vue'
import AppDetails from './AppDetails.vue'

export default {
  components: {
    AppsList,
    AppDetails
  }
}
</script>

<template lang="pug">
  div
    // Inject menu.
    main-menu
    // Main content.
    .ui.container.main
      router-view(keep-alive)
</template>

<script>
import store from './vuex/store'
import MainMenu from './components/layout/MainMenu.vue'

export default {
  store, // Inject the store to all children
  components: { 'main-menu': MainMenu }
}
</script>

<style>
[v-cloak] {
  display: none;
}
.ui.container.main {
  padding-top: 7em;
}
</style>

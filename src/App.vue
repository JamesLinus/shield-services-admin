<template>
  <div>
    <h1>App Header</h1>
    <a v-link="{ path: '/onboarding' }">Onboarding</a>
    <a v-link="{ path: '/collections' }">Collections</a>
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  store // Inject the store to all children
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>

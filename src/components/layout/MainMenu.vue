<template lang="pug">
  nav.ui.fixed.menu
    .ui.container
      .header.item SHIELD Services
      a.item(v-link="{ path: '/onboarding' }") Onboarding
      a.item(v-link="{ path: '/collections' }") Collections
</template>

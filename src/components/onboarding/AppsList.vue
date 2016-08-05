<template lang="pug">
  #apps-list.twelve.wide.column
    .container
      .ui.attached.segment.top.inverted
        .ui.icon.input.inverted
            i.search.icon
            input(type="text" placeholder="Filter by..." v-model="appTitleFilter")
        a.ui.right.floated.blue.inverted.icon.labeled.button(href="/onboarding/add")
                        i.add.icon
                        | App
      .ui.relaxed.divided.list
        a.item(v-for="app in filteredApps | limitList | filterBy appTitleFilter in 'title' 'description' | orderBy 'title'"
          href="#"
          v-bind:class="{ active: activeApp === app }"
          @click="updateActiveApp(app)")
          h4.ui.header {{ app.title }}
          p {{ app.description }}
</template>

<script>
import { updateActiveApp } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      apps: state => state.apps,
      activeApp: state => state.activeApp
    },
    actions: {
      updateActiveApp
    }
  },
  computed: {
    filteredApps () {
      if (this.show === 'favorites') {
        return this.apps.filter(app => app.favorite)
      }

      return this.apps
    }
  },
  filters: {
    limitList: function (arr) {
      return arr.slice(0, Number(10))
    }
  }
}
</script>

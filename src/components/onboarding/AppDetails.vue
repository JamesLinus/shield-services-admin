<template lang="pug">
#app-details.four.wide.column
  .ui.segment(v-if="appSelected")
    h3.ui.header {{ activeAppTitle }}
    p {{ activeAppDescription }}

    h4.ui.header Hub Availability
    .ui.form
      .grouped.fields
        .field(v-for="(index, hub) in activeAppHubs")
          .ui.toggle.checkbox
            input(
              type="checkbox"
              v-bind:checked="hub.status"
              @change="toggleHubAvailability(index, hub)")
            label {{ hub.name }}
</template>

<script>
import { toggleHubAvailability } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      activeAppTitle: state => state.activeApp.title,
      activeAppDescription: state => state.activeApp.description,
      activeAppHubs: state => state.activeApp.hubs
    },
    actions: {
      toggleHubAvailability
    }
  },
  computed: {
    appSelected: function () {
      // `this` points to the vm instance
      return (typeof this.activeAppTitle === 'string') ? 1 : 0
    }
  }
}
</script>

<style>
#app-details {
  //background-color: #333;
}
</style>

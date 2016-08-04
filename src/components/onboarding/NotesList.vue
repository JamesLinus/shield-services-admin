<template lang="pug">
  #notes-list
    #list-header
      h2 Notes
      .btn-group.btn-group-justified(role="group")
        // All Notes button
        .btn-group(role="group")
          button.btn.btn-default(
            type="button"
            @click="show = 'all'"
            v-bind:class="{ active: show === 'all' }")
            | All Notes
        // Favorites Button
        .btn-group(role="group")
          button.btn.btn-default(
            type="button"
            @click="show = 'favorites'"
            v-bind:class="{ active: show === 'favorites' }")
            | Favorites
    .container
      .list-group
        a(v-for="note in filteredNotes"
          class="list-group-item"
          href="#"
          v-bind:class="{ active: activeNote === note }"
          @click="updateActiveNote(note)")
          h4.list-group-item-heading
            | {{ note.text.trim().substring(0, 30) }}
</template>

<script>
import { updateActiveNote } from '../../vuex/actions'

export default {
  data () {
    return {
      show: 'all'
    }
  },
  vuex: {
    getters: {
      notes: state => state.notes,
      activeNote: state => state.activeNote
    },
    actions: {
      updateActiveNote
    }
  },
  computed: {
    filteredNotes () {
      if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }

      return this.notes
    }
  }
}
</script>

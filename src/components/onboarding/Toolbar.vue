<template lang="pug">
  #toolbar
    i.glyphicon.glyphicon-plus(@click="addNote")
    i.glyphicon.glyphicon-star(
      @click="toggleFavorite"
      v-bind:class="{ starred: activeNote.favorite }")
    i.glyphicon.glyphicon-remove(@click="deleteNote")
</template>

<script>
import { addNote, deleteNote, toggleFavorite } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      activeNote: state => state.activeNote
    },
    actions: {
      addNote,
      deleteNote,
      toggleFavorite
    }
  }
}
</script>

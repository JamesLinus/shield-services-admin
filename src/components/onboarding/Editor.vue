<template lang="pug">
#note-editor
  textarea.form-control(
    :value="activeNoteText"
    @input="editNote"
  )
</template>

<script>
import { editNote } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      activeNoteText: state => state.activeNote.text
    },
    actions: {
      editNote
    }
  }
}
</script>

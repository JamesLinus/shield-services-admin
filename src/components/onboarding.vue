<template lang="pug">
  #app
    toolbar
    notes-list
    editor
</template>

<script>
import Toolbar from './onboarding/Toolbar.vue'
import NotesList from './onboarding/NotesList.vue'
import Editor from './onboarding/Editor.vue'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor
  }
}
</script>

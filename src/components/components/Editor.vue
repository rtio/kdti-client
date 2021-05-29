<template>
  <div class="editor-wrappper">
    <div class="editor"></div>
  </div>
</template>

<script>
import html2markdown from 'html2markdown'

export default {
  mounted() {
    if (typeof document === 'object') {
      require('quill/dist/quill.snow.css')
      require('quill/dist/quill.bubble.css')
      require('quill/dist/quill.core.css')
      const Quill = require('quill')

      const quill = new Quill('.editor', {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic'],
            ['link', 'image'],
          ],
        },
      })
      quill.on('text-change', () => {
        this.$emit('input', html2markdown(quill.root.innerHTML))
      })
    }
  },
}
</script>

<style lang="sass" scoped>
.editor-wrappper
  width: 100%
  /deep/ .ql-toolbar,
  /deep/ .ql-container
    width: 100%
  /deep/ .ql-editor
    min-height: 140px
  /deep/ .ql-container
    margin-bottom: 20px
  /deep/ .ql-toolbar
    button
      margin: 0
</style>

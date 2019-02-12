<template>
    <div>
        <textarea
            class="textarea"
            readonly
            v-model="song.tab"/>
    </div>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.textarea{
    width: 100%;
    height: 300px;
    border-style:none;
    font-family: monospace;
    border-color: transparent;
    overflow: auto;
    padding:40px
}
</style>

<template>
    <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action"/>
        </v-toolbar>
        <div class="pr-4 pl-4 pt-2 pb-2">
            <slot>
                No slot defined
            </slot>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

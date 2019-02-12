<template>
    <panel title="Search">
        <v-text-field
            type="text"
            label="search by song title,artist,album or genere"
            v-model="search"
        />
    </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (val) {
      const route = {
        name: 'songs'
      }
      if (this.search) {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 100),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>

</style>

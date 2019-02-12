<template>
    <v-layout>
      <v-flex xs6 offset-xs3>
          <search-panel>
          </search-panel>
         <songs-panel class="mt-2"></songs-panel>
        </v-flex>
    </v-layout>
</template>
<script>

import SongsPanel from './SongsPanel'
import SearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    SongsPanel,
    SearchPanel
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
    console.log(this.songs)
  }
}
</script>
<style scoped>
.song-title{
  font-size: 2rem
}
.song-artist{
 font-size: 1.2rem
}
.album-album{
  font-size: 1rem
}
.album-image{
  width: 70%
}
.song{
  overflow: hidden;
}
</style>

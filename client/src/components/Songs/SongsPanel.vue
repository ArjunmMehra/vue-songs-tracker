<template>
    <panel title="Songs">
        <v-btn
            slot="action"
            :to="{name:'create-song'}"
            fab
            right
            class="orange accent-12"
            small
            absolute
        >
            <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for= "song in songs" :key= "song.id">
            <v-layout>
                <v-flex xs6>
                    <div class="song-title">
                        {{song.title}}
                    </div>
                    <div class="song-artist">
                        {{song.artist}}
                    </div>
                    <div class="song-album">
                        {{song.album}}
                    </div>
                    <v-btn
                        :to="{name:'song',params:{id:song.id}}"
                        class="blue accent-12"
                        small
                        dark
                        flat
                    >
                        <v-icon>remove_red_eye</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex xs6>
                    <img :src="song.albumImageuUrl" class="album-image" alt="NO IMAGE">
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>
<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (val) {
        this.songs = (await SongsService.index(val)).data
      }
    }
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

<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <panel title="Song Metadata">
                    <song-metadata :song="song"/>
                </panel>
            </v-flex>
            <v-flex xs6 class="ml-2">
                <panel title="Youtube Video">
                    <youtube-video :youtubeid="youtubeid"/>
                </panel>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs6 class="mt-2">
                <panel title="Lyrics">
                    <song-lyrics :song="song"></song-lyrics>
                </panel>
            </v-flex>
            <v-flex xs6 class="ml-2 mt-2">
                <panel title="Tabs">
                    <song-tabs :song="song"></song-tabs>
                </panel>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YoutubeVideo from './YoutubeVideo'
import SongLyrics from './SongLyrics'
import SongTabs from './SongTabs'
import {getIdFromURL} from 'vue-youtube-embed'

export default {
  data () {
    return {
      song: {},
      youtubeid: ''
    }
  },
  components: {
    SongMetadata,
    YoutubeVideo,
    SongLyrics,
    SongTabs
  },
  async mounted () {
    const songId = this.$store.state.route.params.id
    this.song = (await SongsService.show(songId)).data
    this.youtubeid = getIdFromURL(`https://www.youtube.com/watch?v=${this.song.youtubeId}`)
  }
}
</script>

<style scoped>
.song{
  overflow: hidden;
}
</style>

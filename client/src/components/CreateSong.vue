<template>
    <v-layout>
        <v-flex xs4>
            <panel title="Song Metadata">
                    <v-text-field
                        type="text"
                        label="Title *"
                        required
                        :rules= [required]
                        v-model="song.title"/>
                    <br/>
                    <v-text-field
                        type="text"
                        v-model="song.artist"
                        required
                        :rules= [required]
                        label="Artist *"/>
                    <br>
                    <v-text-field
                        type="text"
                        label="Genere *"
                        required
                        :rules= [required]
                        v-model="song.genere"/>
                    <br/>
                    <v-text-field
                        type="text"
                        v-model="song.album"
                        required
                        :rules= [required]
                        label="Album *"/>
                    <br>
                    <v-text-field
                        type="text"
                        label="Album Image URL *"
                        required
                        :rules= [required]
                        v-model="song.albumImageuUrl"/>
                    <br/>
                    <v-text-field
                        type="text"
                        v-model="song.youtubeId"
                        required
                        :rules= [required]
                        label="YouTube ID *"/>
            </panel>
        </v-flex>
        <v-flex xs8 class="ml-4">
            <panel title="Song Structure">
                    <v-textarea
                        type="text"
                        label="Lyrics *"
                        required
                        :rules= [required]
                        v-model="song.lyrics"/>
                    <br/>
                    <v-textarea
                        type="text"
                        v-model="song.tab"
                        required
                        :rules= [required]
                        label="Tab *"/>
                    <div class="red--text" v-html="error"></div>
                    <v-btn @click="createSong" dark class="blue">Create Song</v-btn>
            </panel>
        </v-flex>
      </v-layout>
</template>

<script>

import SongsService from '../services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genere: null,
        album: null,
        albumImageuUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      songCreated: false,
      required: (value) => !!value || `Required.`,
      error: null
    }
  },
  components: {
  },
  methods: {
    async createSong () {
      try {
        this.error = null
        const isAllFilled = Object.keys(this.song).every(key => this.song[key])
        if (!isAllFilled) {
          this.error = 'Please fill all required details!'
          return
        }
        await SongsService.post(this.song)
        this.$router.push({name: 'songs'})
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

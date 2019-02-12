<template>
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
            <div class="song-album">
                {{song.genere}}
            </div>
             <v-btn
                :to="{
                    name: 'edit-song',
                    params(){
                        return {
                            id:song.id
                        }
                    }
                }"
                class="blue accent-12"
                small
                dark
                flat
            >
            <v-icon>edit</v-icon>
            </v-btn>
        </v-flex>
        <v-flex xs6>
            <img :src="song.albumImageuUrl" class="album-image" alt="NO IMAGE">
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: {
    song: {
      required: true,
      type: Object
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
</style>

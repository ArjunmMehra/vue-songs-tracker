<template>
    <div>
      <youtube :video-id="youtubeid" :player-width="560" :player:height="360" :player-vars="{ autoplay: 1}"></youtube>
    </div>
</template>
<script>
export default {
  components: {
    // QrcodeStream,
    // QrcodeDropZone,
    // QrcodeCapture
  },
  props: {
    youtubeid: {
      required: true,
      type: String
    }
  },
  methods: {
    // onDecode (decodedString) {
    //   console.log(`Decode String is ${decodedString}`)
    //   this.decodedString = decodedString
    // }
  }
}
</script>

<style>
.youtube{
    width: 70%
}
</style>

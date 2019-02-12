<template>
<v-toolbar fixed class="blue" dark>
    <router-link :to="{name: 'songs'}" tag='span'>
    <v-toolbar-title >Songs Tracker</v-toolbar-title>
    </router-link>
        <v-toolbar-items>
        <v-btn flat dark :to="{name:'songs'}">
            Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn" >
        <v-btn flat dark :to="{name:'Login'}">
            Sign In
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn" >
        <v-btn flat dark :to="{name:'Register'}">
            Sign Up
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="$store.state.isUserLoggedIn" >
        <v-btn flat dark @click="logOut">
            Log Out
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  methods: {
    logOut () {
      this.$router.push('/')
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style>

</style>

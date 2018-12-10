<template>
<v-toolbar fixed class="blue" dark>
    <span @click="navigateTo('/')">
    <v-toolbar-title >Songs Tracker</v-toolbar-title>
    </span>
    <!-- TODO: Implement Me
        <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="$store.state.isUserLoggeIn" >
        <v-btn flat dark @click="navigateTo('login')">
            Sign In
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="$store.state.isUserLoggeIn" >
        <v-btn flat dark @click="navigateTo('Register')">
            Sign Up
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>

</style>

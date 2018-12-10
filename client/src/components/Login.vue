<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
    <div class="pl-4 pl-4 pt-2 pb-2">
      <v-form>
    <v-text-field type="email"
     label="Email"
    v-model="email"/>
     <br/>
    <v-text-field type="password"
      v-model="password"
      label="Password"/>
      <div class="red--text" v-html="error"/>
     <br>
    <v-btn @click="login" dark class="blue">Login</v-btn>
    </v-form>
   </div>
      </div>
   </v-flex>
 </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  /* watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'Arjun'
    }, 2000)
  }, */
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log('login response success', response.data)
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setToken', response.data.token)
      } catch (err) {
        console.log('login response error', err)
        this.error = err.response.data.error
        console.log('Register response error', err.response.data.error)
      }
    }
  }
}
</script>

<style scoped>
</style>

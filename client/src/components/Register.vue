<template>
 <v-layout>
   <v-flex xs6 offset-xs3>
    <panel title="Register">
      <slot>
        <v-form aria-autocomplete="off">
          <v-text-field
                type="email"
                label="Email"
                v-model="email"
          />
          <br/>
          <v-text-field
                type="password"
                v-model="password"
                label="Password"
          />
          <div class="red--text" v-html="error"/>
          <br/>
          <v-btn @click="register" dark class="blue">Register</v-btn>
        </v-form>
      </slot>
    </panel>
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
  components: {
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setToken', response.data.token)
        this.$router.push({name: 'songs'})
        // console.log('Register button is clicked', this.email + this.password)
        console.log('Register response success', response.data)
      } catch (err) {
        // console.log('Register button is clicked', this.email + this.password)
        this.error = err.response.data.error
        console.log('Register response error', err.response.data.error)
      }
    }
  }
}
</script>

<style scoped>
</style>

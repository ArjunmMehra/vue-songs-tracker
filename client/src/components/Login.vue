<template>
 <v-layout>
   <v-flex xs6 offset-xs3>
    <panel title="Login">
        <slot>
          <v-form>
            <v-text-field
                type="email"
                label="Email"
                v-model="email"
            />
            <br/>
            <v-text-field
                type="password"
                v-model="password"
                label="Password"/>
            <div class="red--text" v-html="error"/>
          <br>
          <v-btn @click="login" dark class="blue">Login</v-btn>
          </v-form>
        </slot>
    </panel>
 </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import ErrorHandler from '@/utils/errorhandler'
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setToken', response.data.token)
        this.$router.push({name: 'songs'})
      } catch (err) {
        ErrorHandler.handle(this, err)
      }
    }
  }
}
</script>

<style scoped>
</style>

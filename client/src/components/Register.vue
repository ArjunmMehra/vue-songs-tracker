<template>
  <div>
    <h1>Register</h1>
    <input type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
     <br/>
    <input type="password"
      name="password"
      v-model="password"
      placeholder="passord"/>
     <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'Arjun'
    }, 2000)
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      // console.log('Register button is clicked', this.email + this.password)
      console.log('Register response', response.data)
    }
  }
}
</script>

<style>

</style>

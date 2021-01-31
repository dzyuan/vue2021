<template>
  <el-main>
    <authForm buttonText="登录" :onSubmit="onLogin" />
    {{ feedback }}
  </el-main>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
// import vueaxios from 'vue-axios'
import authForm from '@/components/authForm'
import { saveUserData } from '@/utils'
// Vue.use(vueaxios, axios)
export default {
  components: {
    authForm
  },
  data() {
    return {
      // formLogin: {
      //   username: '',
      //   password: ''
      // },
      feedback: {}
    }
  },

  methods: {
    /* async onLogin(formLogin) {
      try {
        let response = await this.$auth.loginWith('local', { data: formLogin })
        this.$auth.setUser(user)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    } */

    onLogin(formLogin) {
      axios
        .post('http://localhost:3000/api/user/login', formLogin)
        .then((res) => {
          console.log(res)
          this.feedback = res.data
          if (this.feedback.token) {
            saveUserData(this.feedback)
            //localStorage.setItem('authdata', JSON.stringify(this.feedback))
            this.$store.dispatch('setLoggedIn', true)
            this.$store.dispatch('setUsername', this.feedback.username)

            this.$store.dispatch('setUserType', this.feedback.userType)

            this.$store.dispatch('setToken', this.feedback.token)

            this.$store.dispatch('setUserId', this.feedback.userId)

            const timeToLogout = this.feedback.expiresIn * 1000

            console.log(timeToLogout)

            this.$store.dispatch('setLogoutTimer', timeToLogout)
            console.log('转到首页!')
            this.$router.push('/')
          }
        })
      console.log(this.feedback)
    }
  }
}
</script>

<style></style>
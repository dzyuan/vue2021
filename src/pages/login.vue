<template>
  <el-main>
    <authForm buttonText="登录" :onSubmit="onLogin" />
    {{ feedback }}
  </el-main>
  <router-link to="/reg">注册用户</router-link>
</template>

<script>

import ajax from '../service/ajax';

import authForm from '@/components/authForm'
import { saveUserData } from '@/utils'

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
    
    onLogin(formLogin) {
      ajax
        .post('/api/user/login', formLogin)
        .then((res) => {
          console.log(res)
          this.feedback = res.data
          if (this.feedback.token) {
            saveUserData(this.feedback)
            //localStorage.setItem('authdata', JSON.stringify(this.feedback))
            this.$store.dispatch('setUserInfo', this.feedback)            

            const timeToLogout = this.feedback.expiresIn * 1000

            console.log(timeToLogout)

            this.$store.dispatch('setLogoutTimer', timeToLogout)
            this.$router.push('/')
            console.log('转到首页!')
     
          }
        })
      console.log(this.feedback)
    }
  }
}
</script>

<style></style>
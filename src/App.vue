<template>
  <el-container id="app">
    <el-header
      v-show="this.$store.state.login.userInfo.userId"
      style="text-align: right; font-size: 12px"
    >
      <TopNav />
    </el-header>

    <el-main>
      <div class="main"><router-view></router-view></div>
    </el-main>
    <el-footer  v-show="this.$store.state.login.userInfo.userId">
      <FooterBar />
    </el-footer>
  </el-container>
</template>

<script>
// import mapActions from "vuex";
import TopNav from "./views/TopNav.vue";
import FooterBar from "./views/FooterBar.vue";
import {  getUserFromLocalStorage } from './utils';
export default {
  name: "app",
  components: {
    TopNav,
    FooterBar,
  },
  mounted() {
    this.getUserInfo()
    },
  methods: {
    getUserInfo() {
      let userInfo = getUserFromLocalStorage();
      // console.log(userInfo);
      if (!userInfo.token || Date.now() > userInfo.expiresIn) {
        this.$store.dispatch("clearUserInfo");
      } else {
        this.$store.dispatch("setUserInfo", userInfo);
        const timeToLogout = userInfo.expiresIn - Date.now();
        this.$store.dispatch("setLogoutTimer", timeToLogout);
      }
    },
  },
};
</script>
  
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e5edf5;

  height: 100%;
}

.el-header {
  background-color: #fff;
  color: rgb(197, 189, 189);
  line-height: 60px;
}
.el-footer {
  background-color: #fff;
  color: #333;
  line-height: 60px;

  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.el-main {
  background-color: #fff;
  color: #333;
  height: 100%;
  padding-bottom: 100px;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
  background-color: dodgerblue;
}
</style>

<template>
  <el-container id="app">
    <el-header style="text-align: right; font-size: 12px">
      <TopNav />
    </el-header>

    <el-main>
      <div class="main"><router-view></router-view></div>
    </el-main>
    <el-footer>
      <FooterBar />
    </el-footer>
  </el-container>

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import TopNav from "./views/TopNav.vue";
import FooterBar from "./views/FooterBar.vue";
export default {
  name: "app",
  components: {
    
    TopNav,
    FooterBar,
  },
};
</script>
  
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  height: 100%;
}

.el-header {
  background-color: #fff;
  color: #333;
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
  background-color:#fff;
  color: #333;

  padding-bottom: 100px;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
}
</style>

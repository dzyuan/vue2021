<template>
    <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#FFF"
 >
  <el-menu-item index="1"><a href="/" >home</a></el-menu-item>
  <el-submenu index="2">
    <template #title>web3d试验台</template>
    <el-menu-item index="2-1"><el-link href="http://10.162.98.161:8900/rebeng/rebeng.html" target="blank">热泵</el-link></el-menu-item>
    <el-menu-item index="2-2"><el-link href="http://10.162.98.161:8900/my_test_app/my_test_app.html" target="blank">方盒</el-link></el-menu-item>
    <el-menu-item index="2-3"><el-link href="http://10.162.98.161:8900/parametric_models/index.html" target="blank">展示</el-link></el-menu-item>
    
  </el-submenu>
  <el-menu-item index="3" ><router-link to="/keji">科技创新</router-link></el-menu-item>
  <el-menu-item index="4" ><router-link to="/zhishi">知识库</router-link></el-menu-item>
  <el-menu-item index="5" ><router-link to="/bim">BIM培训</router-link></el-menu-item>
  <el-menu-item index="6" ><router-link to="/web">网站资源</router-link></el-menu-item>
  <el-menu-item index="7" ><router-link to="/about">关于我们</router-link></el-menu-item>
</el-menu>
</template>

<script>
  export default {
      name:'TopNav',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
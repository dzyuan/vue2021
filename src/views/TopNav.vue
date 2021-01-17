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
  <el-menu-item index="3" ><el-link href="/keji" >科技创新</el-link></el-menu-item>
  <el-menu-item index="4" ><el-link href="/zhishi" >知识库</el-link></el-menu-item>
  <el-menu-item index="5" ><el-link href="/bim" >BIM 培训</el-link></el-menu-item>
  <el-menu-item index="6" ><el-link href="/web" >网站资源</el-link></el-menu-item>
  <el-menu-item index="7" ><el-link href="/about" >about</el-link></el-menu-item>
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
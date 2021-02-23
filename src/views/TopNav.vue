<template>
  <el-row :gutter="20">
    <el-col :span="2">
      <router-link class="el-icon-s-home" to="/">home</router-link>
    </el-col>
    <el-col :span="2">
      <router-link to="/keji">科技创新</router-link>
    </el-col>
    <el-col :span="2"> <router-link to="/zhishi">知识库</router-link> </el-col>
    <el-col :span="2"> <router-link to="/chengguo">成果库</router-link> </el-col>
    <el-col :span="2">
      <router-link to="/bim">BIM培训</router-link>
    </el-col>
    <el-col :span="2"><router-link to="/web">网站资源</router-link> </el-col>
    <el-col :span="2">
      <router-link to="/about">关于我们</router-link>
    </el-col>

    <el-col :span="2">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#FFF"
      >
        <el-submenu index="1">
          <template #title>web3d试验台</template>
          <el-menu-item index="1-1"
            ><el-link
              href="http://10.162.98.161:8900/rebeng/rebeng.html"
              target="blank"
              >热泵</el-link
            ></el-menu-item
          >
          <el-menu-item index="1-2"
            ><el-link
              href="http://10.162.98.161:8900/my_test_app/my_test_app.html"
              target="blank"
              >方盒</el-link
            ></el-menu-item
          >
          <el-menu-item index="1-3">
            <el-link
              href="http://10.162.98.161:8900/parametric_models/index.html"
              target="blank"
              >展示</el-link
            >
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>

    <el-col :span="4"></el-col>
    <el-col :span="2">
      <el-button class="el-icon-user" type="primary" round>{{
        this.$store.state.login.userInfo.username
      }}</el-button>
    </el-col>
    <el-col :span="2">
      <el-button class="el-icon-s-custom" type="warning" round @click="onLogout"
        >退出登录</el-button
      >
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onLogout() {
      this.$store.dispatch("clearUserInfo");
      this.$router.push("/login");
    },
  },
};
</script>



<style >
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
</style>
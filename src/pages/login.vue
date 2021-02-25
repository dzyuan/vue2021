<template>

    <el-form
      ref="formLogin"
      :inline="false"
      :model="formLogin"
      :rules="rules"
      id="login-box"
      label-position="right"
      label-width="70px"
    >
      <img src="..\..\public\powerchinalogo.png" class="image" />
      <H1 class="title">河南工程科技创新管理系统</H1>
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="formLogin.username"
          placeholder="用户名"
          maxlength="20"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="formLogin.password"
          placeholder="密码"
          maxlength="20"
          show-password=false
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin(formLogin)" class='button'>登录</el-button>
      </el-form-item>
    </el-form>
 
 
</template> 


<script>
import ajax from "../service/ajax";

import { saveUserData } from "@/utils";

export default {
  components: {},
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
      },
      feedback: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  methods: {
    onLogin(formLogin) {
      ajax.post("/api/user/login", formLogin).then((res) => {
        console.log(res);
        this.feedback = res.data;
        if (this.feedback.token) {
          saveUserData(this.feedback);
          //localStorage.setItem('authdata', JSON.stringify(this.feedback))
          this.$store.dispatch("setUserInfo", this.feedback);

          const timeToLogout = this.feedback.expiresIn * 1000;

          console.log(timeToLogout);

          this.$store.dispatch("setLogoutTimer", timeToLogout);
          this.$router.push("/");
          console.log("转到首页!");
        }
      });
      console.log(this.feedback);
    },
  },
};
</script>

<style>
#outer {
  background: url("../../public/beijing.jpeg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100%;
  min-height: 100%;
  padding-top: 0%;
  padding-bottom: 0%;
}

#login-box .image {
  width: 50%;
  height: 50%;
}
#login-box .button {
  width:330px;
  
}

#login-box {
  width: 400px;
  height: auto;
  margin: 0 auto;
  margin-top: 8%;
  text-align: center;
  background: #04427560;
  color: #ffffff;
  padding-top: 60px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 50px;
  border-radius: 10px;
  box-shadow: rgb(45, 82, 141) 10px 10px;;
}
</style>
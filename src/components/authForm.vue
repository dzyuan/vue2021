<template>
  <el-form ref="formLogin" :inline="false" :model="formLogin" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formLogin.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formLogin.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(formLogin)">{{buttonText}}</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
    data(){
        return{
            formLogin:{
                username:'dzy',
                password:'123'
            },
            rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
        }
    },
    props:["onSubmit","buttonText"]

}
</script>

<style>

</style>

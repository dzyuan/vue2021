<template>
  <el-row :gutter="10" v-for="(item,index) in posts" :key="item.id">
    <el-col :span="16" class="title"
      ><router-link :to="`/post/${index}/content`"><p class="title">{{ item.title }}</p></router-link></el-col
    >
    <el-col :span="8"
      ><p class="title">{{ item.time }}</p></el-col
    >
  </el-row>
</template>

<script>

export default {
 data() {
    return {
    
    
    };
  },
 computed: {
  posts() {
      return  this.$store.getters.posts;
    },
  },


}
</script>

<style>

</style>
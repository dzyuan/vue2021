<template>
  <h3>{{post.title}}</h3>
  <div>
      <p>{{post.author}}{{post.time}}</p>

<el-image
            style="width: 600px; height: 400px"
            :src="post.icon"
            fit="fill"
          ></el-image>


      <p>{{post.content}}</p>
  </div>
</template>

<script>

export default {
 data() {
    return {
    
    
    };
  },
 computed: {
  post() {

      return  this.$store.getters.posts[this.$route.params.id];
    },
  },
methods:{}
 

}
</script>

<style>

</style>
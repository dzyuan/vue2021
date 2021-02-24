<template>
    <iframe src="./pages/rebeng/rebeng.html" allowfullscreen></iframe>
</template>
<script>
export default {
  name: 'rebeng',
  props: {
    msg: String
  }
}
</script>
<style scoped>
iframe{height: 100%;
width: 100%;
  margin: 0;
  padding: 0;

}
</style>
<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <el-button @click="say('hi')">say hi</el-button>
    <el-button @click="add">add1</el-button>
    <el-button @click="n += 1">add2</el-button>
    <button @click="tagname">tagname</button>
    <el-button @click="tagname">tagname</el-button>
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <p>{{ n }}</p>
      <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "about",
  props: {
    msg:String,
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise,
  },

  data() {
    return {
     /*  msg: "String",
      title:'包含了这个组件选项的变量名', */
      n: 1,
    };
  },
  methods: {
    say(message) {
      alert(message);
    },
    add() {
      this.n += 1;
    },
    tagname(event) {
      alert(event.target.tagName);
    },
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

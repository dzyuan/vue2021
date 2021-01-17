<template>
  <h3>player</h3>  

  <div id="dplayer"></div>
  
</template>

<script>

import DPlayer from 'dplayer';

export default {
  name: "player",
data() {
    return {
      currentDate: new Date()
    };
  },
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById("dplayer"),
      video: {
        url: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
      },
    });
  console.log(dp)
  },
 
};


</script>



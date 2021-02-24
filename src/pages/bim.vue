<template>
  <h3>bim</h3>  
<el-row  :gutter="20">
 
<el-col :span="6"><el-card :body-style="{ padding: '0px' }">
      <img src="..\..\public\obd.jpg" class="image">
      <div style="padding: 14px;" class="bg-purple-dark">
        <span><el-link href="/player" >OBD教学视频</el-link></span>
       
      </div>
    </el-card></el-col>
  <el-col :span="6"><el-card :body-style="{ padding: '0px' }">
      <img src="..\..\public\OPM.jpg" class="image">
      <div style="padding: 14px;" class="bg-purple-dark">
        <span><el-link href="/player" >OPM教学视频</el-link></span>
       
      </div>
    </el-card></el-col>
  <el-col :span="6"><el-card :body-style="{ padding: '0px' }">
      <img src="..\..\public\brcm.jpg" class="image">
      <div style="padding: 14px;" class="bg-purple-dark">
        <span><el-link href="/player" >BRCM教学视频</el-link></span>
        
      </div>
    </el-card></el-col>
  <el-col :span="6"><el-card :body-style="{ padding: '0px' }">
      <img src="..\..\public\lumenrt.jpg" class="image">
      <div style="padding: 14px;" class="bg-purple-dark">
        <span><el-link href="/player" >LUMENRT教学视频</el-link></span>
        
      </div>
    </el-card></el-col>


</el-row>


  <!-- <div id="dplayer"></div> -->
  
</template>

<script>



export default {
  name: "bim",
data() {
    return {
      currentDate: new Date()
    };
  },
  
 
};


</script>


<style>
  .el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
 

  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;

  }

  .image{

height: 300px;
  }
</style>
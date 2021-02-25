<template>
  <el-row :gutter="20">
    <el-col :span="6"
      ><el-card :body-style="{ padding: '0px' }">
        <img src="..\..\public\lixiang.jpg" class="image" />
        <div style="padding: 14px" class="bg-purple-dark">
          <span><router-link to="/project">立项管理</router-link></span>
        </div>
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card :body-style="{ padding: '0px' }">
        <img src="..\..\public\hetong.jpg" class="image" />
        <div style="padding: 14px" class="bg-purple-dark">
          <span><el-link href="/player">合同管理</el-link></span>
        </div>
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card :body-style="{ padding: '0px' }">
        <img src="..\..\public\gongfa.jpg" class="image" />
        <div style="padding: 14px" class="bg-purple-dark">
          <span><el-link href="/player">过程管理</el-link></span>
        </div>
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card :body-style="{ padding: '0px' }">
        <img src="..\..\public\lunwen.jpg" class="image" />
        <div style="padding: 14px" class="bg-purple-dark">
          <span><el-link href="/player">高企管理</el-link></span>
        </div>
      </el-card></el-col
    >
  </el-row>

  <el-row :gutter="20">
    <el-col :span="6"
      ><el-card :body-style="{ padding: '0px' }">
        <img src="..\..\public\lixiang.jpg" class="image" />
        <div style="padding: 14px" class="bg-purple-dark">
          <span><router-link to="/project/list">知识产权</router-link></span>
        </div>
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card :body-style="{ padding: '0px' }">
        <img src="..\..\public\hetong.jpg" class="image" />
        <div style="padding: 14px" class="bg-purple-dark">
          <span><el-link href="/player">论文管理</el-link></span>
        </div>
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card :body-style="{ padding: '0px' }">
        <img src="..\..\public\gongfa.jpg" class="image" />
        <div style="padding: 14px" class="bg-purple-dark">
          <span><el-link href="/player">工法管理</el-link></span>
        </div>
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card :body-style="{ padding: '0px' }">
        <img src="..\..\public\lunwen.jpg" class="image" />
        <div style="padding: 14px" class="bg-purple-dark">
          <span><el-link href="/player">管理评价</el-link></span>
        </div>
      </el-card></el-col
    >
  </el-row>
  <!-- <div id="dplayer"></div> -->
</template>

<script>
export default {
  name: "bim",
  data() {
    return {
      currentDate: new Date(),
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

.image {
  height: 300px;
}
</style>
<template>
  <div class="home">
    <div class="left">
  
      <el-row :gutter="20" class="news">
        <el-col :span="16">
          <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in images" :key="item">
          <el-image
            style="width: 600px; height: 400px"
            :src="item"
            fit="fill"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
        </el-col>
        <el-col :span="8"><Posts postsName="科技动态" /></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>

    <div class="right">
      <el-calendar>
        <template #dateCell="{ data }">
          <el-popover
            placement="top"
            trigger="hover"
            :disabled="!holiday.hasOwnProperty(data.day)"
          >
            <template #reference>
              <p class="day" :class="data.isSelected ? 'is-selected' : ''">
                <el-badge
                  :value="
                    holiday[data.day]
                      ? Object.values(holiday[data.day]).length
                      : ''
                  "
                  class="item"
                  :hidden="!holiday.hasOwnProperty(data.day)"
                >
                  <span>{{ data.day.split("-")[2] }}</span>
                </el-badge>
              </p>
            </template>

            <p v-for="(item, i) in holiday[data.day]" :key="i">{{ item }}</p>
          </el-popover>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script>
import holiday from "../../public/holiday.js";
import Posts from "../components/posts";
export default {
  name: "home",
  components: {
    Posts,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      images: [
        require("../../public/image1.jpg"),
        require("../../public/image2.jpg"),
        require("../../public/image3.jpg"),
        require("../../public/image4.jpg"),
        require("../../public/image5.jpg"),
        require("../../public/image6.jpg"),
        require("../../public/image7.jpg"),
        require("../../public/image8.jpg"),
      ],
      holiday,
    };
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
}

::v-deep .el-calendar-table .el-calendar-day {
  height: 45px;
}

.item {
  padding-top: 5px;
  padding-right: 5px;
}

.right {
  position: absolute;
  right: 0;

  width: 400px;
}
.left {
  width: calc(100% - 400px);
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-row {
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 2px;
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
  min-height: 200px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

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

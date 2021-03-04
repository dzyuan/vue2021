<template>
  <div class="home">
    <div class="left">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in images" :key="item">
          <el-image
            style="width: 600px; height: 100px"
            :src="item"
            fit="contain"
            ></el-image>
        </el-carousel-item>
      </el-carousel>
      <br />
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple"><el-image
            style="width: 500px; height: 300px"
            :src= "require('../../public/obd.jpg')"
            fit="contain"
            ><template #error>
              <div class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div> </template
          ></el-image></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
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

export default {
  name: "home",
  props: {
    msg: String,
  },
  data() {
    return {
      images: [
        "require('../../public/obd.jpg')",
        "../../public/image2.jpg",
        "../../public/image3.jpg",
        "../../public/image4.jpg",
      ],
      holiday,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
}

::v-deep .el-calendar-table .el-calendar-day {
  height: 50px;
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

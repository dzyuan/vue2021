<template>

  <el-divider content-position="left">  <h3>{{ newsName }}</h3></el-divider>
  <el-row :gutter="10" v-for="item in news" :key="item.id">
    <el-col :span="16" class="title"
      ><p class="title">{{ item.title }}</p></el-col
    >
    <el-col :span="8"><p class="title">{{ item.time }}</p></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          title: "公司召开2021年技术创新工作会议",
          time: "2021年3月4日",
          content:
            "3月4日下午，公司召开2021年度技术创新工作会议。公司党委书记、董事长王海波，总经理、党委副书记刘长龙，公司在郑领导、公司各部室、业务中心、事业部、分公司、专业技术公司负责人及相关管理人员参加会议，会议由副总经理、总工程师孙建华主持。",
        },
        {
          id: 1,
          title: "公司召开2021年技术创新工作会议",
          time: "2021年3月4日",
          content:
            "3月4日下午，公司召开2021年度技术创新工作会议。公司党委书记、董事长王海波，总经理、党委副书记刘长龙，公司在郑领导、公司各部室、业务中心、事业部、分公司、专业技术公司负责人及相关管理人员参加会议，会议由副总经理、总工程师孙建华主持。",
        },
        {
          id: 1,
          title: "公司召开2021年技术创新工作会议",
          time: "2021年3月4日",
          content:
            "3月4日下午，公司召开2021年度技术创新工作会议。公司党委书记、董事长王海波，总经理、党委副书记刘长龙，公司在郑领导、公司各部室、业务中心、事业部、分公司、专业技术公司负责人及相关管理人员参加会议，会议由副总经理、总工程师孙建华主持。",
        },
        {
          id: 1,
          title: "公司召开2021年技术创新工作会议",
          time: "2021年3月4日",
          content:
            "3月4日下午，公司召开2021年度技术创新工作会议。公司党委书记、董事长王海波，总经理、党委副书记刘长龙，公司在郑领导、公司各部室、业务中心、事业部、分公司、专业技术公司负责人及相关管理人员参加会议，会议由副总经理、总工程师孙建华主持。",
        },
        {
          id: 1,
          title: "公司召开2021年技术创新工作会议",
          time: "2021年3月4日",
          content:
            "3月4日下午，公司召开2021年度技术创新工作会议。公司党委书记、董事长王海波，总经理、党委副书记刘长龙，公司在郑领导、公司各部室、业务中心、事业部、分公司、专业技术公司负责人及相关管理人员参加会议，会议由副总经理、总工程师孙建华主持。",
        },
      ],
    };
  },
  props: ["newsName"],
};
</script>

<style scoped>
p,.title {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  padding-left: 10px;
 
  text-align: left;
 
}
.el-row {
  margin: 0px;
  
}
</style>
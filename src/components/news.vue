<template>
  <el-row :gutter="20" v-for="item in news" :key="item.id">
    <el-col :span="20"
      ><div class="grid-content bg-purple">{{ item.title }}</div></el-col
    >
    <el-col :span="4"
      ><div class="grid-content bg-purple">{{ item.time }}</div></el-col
    >
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
        {},
      ],
    };
  },
};
</script>

<style>
</style>
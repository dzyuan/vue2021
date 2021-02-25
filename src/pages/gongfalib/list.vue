<template>
  <el-table :data="gongfalibs" style="width: 100%">
    <el-table-column label="序号" type="index" width="50"></el-table-column>
    <el-table-column prop="name" label="工法名称" width="200"></el-table-column>
    <el-table-column
      prop="department"
      label="编写单位"
      width="120"
    ></el-table-column>
    <el-table-column prop="writer" label="编写人" width="80"></el-table-column>
    <el-table-column prop="year" label="编制时间" width="80"></el-table-column>

    <el-table-column
      prop="techField"
      label="工法类别"
      width="120"
    ></el-table-column>
    <el-table-column
      prop="class"
      label="工法级别"
      width="120"
    ></el-table-column>
    <el-table-column prop="summary" label="内容摘要"></el-table-column>
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="{ row }">
        <div>
          <el-button @click="viewGongfalib(row._id)" type="text" size="small"
            >查看工法</el-button
          >

          <el-button @click="editGongfalib(row._id)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="deleteGongfalib(row._id)" type="text" size="small"
            >删除</el-button
          >
        </div>
      </template>
    </el-table-column>
  </el-table>
  
  <span><router-link to="/gongfalib/add">新增工法</router-link></span>
</template>

<script>
import ajax from "../../service/ajax";

export default {
  data() {
    return {
      // gongfalibs: [],
    };
  },
  computed: {
    gongfalibs() {
      return this.$store.getters.gongfalibs;
    },
  },
 beforeMount() {
    this.getGongfalibs();
    console.log("表格数据已获取");
  },
  methods: {
    getGongfalibs() {
      ajax
        .get("api/gongfalib")
        .then((res) => {
          // console.log(res.data.gongfalibs);
          // this.gongfalibs = res.data.gongfalibs;
          this.$store.dispatch("setGongfalibs", res.data.gongfalibs);
          // console.log("this.gongfalibs:" + this.gongfalibs);
          // console.log("this.$store.state:" + this.$store.state);
        })
        .catch((err) => console.log(err));
    },

    editGongfalib(id) {
      this.$router.push({ path: `/gongfalib/${id}/edit` });
    },
    viewGongfalib(id) {
      this.$router.push({ path: `/gongfalib/${id}/content` });
    },
    deleteGongfalib(id) {
      ajax
        .delete(`api/gongfalib/${id}`)
        .then((res) => {
          this.feedback = res.data;
          console.log(this.feedback);
          this.$router.go(0);
        })
        .catch((error) => {
          console.log("err+" + error);
        });
    },
    dateFormat: function (row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return date.substring(0, 10);
    },
    
  },
};
</script>

<style>
.el-table__header tr,
.el-table__header th,
.el-table__header cell {
  background: #409eff;
  height: 30px;
  padding: 0;
  color: white;
}
</style>

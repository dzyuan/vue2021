<template>
  <el-table :data="projects" style="width: 100%" >
    <el-table-column label="序号" type="index" width="50"></el-table-column>
    <el-table-column prop="name" label="工法名称" width="200"></el-table-column>
    <el-table-column
      prop="department"
      label="编写单位"
      width="120"
    ></el-table-column>
    <el-table-column prop="writer" label="编写人" width="80"></el-table-column>
    <el-table-column
      prop="completeDate"
      label="编制时间"
      width="120"
      :formatter="dateFormat"
    ></el-table-column>
    
    <el-table-column
      prop="techField"
      label="技术领域"
      width="150"
      :formatter="fieldFormat"
    ></el-table-column>
    <el-table-column prop="innovation" label="工法级别"></el-table-column>
    <el-table-column
      prop="completeDate"
      label="内容摘要"
      width="120"
      :formatter="dateFormat"
    ></el-table-column>
    <el-table-column fixed="right" label="操作" width="150">
      <template  #default="scope">
      <div>
        <el-button @click="viewProject(scope.row._id)" type="text" size="small"
          >查看工法</el-button
        >
        <el-button @click="editProject(scope.row._id)" type="text" size="small"
          >编辑</el-button
        >
        <el-button
          @click="deleteProject(scope.row._id)"
          type="text"
          size="small"
          >删除</el-button
        >
      </div>
      </template>
    </el-table-column>
  </el-table>
  <span><router-link to="/project/add">新增工法</router-link></span>
</template>

<script>
import ajax from "../service/ajax";

export default {
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
  },
  mounted() {
    this.getProjects()
     console.log('表格数据已获取')
    },
  methods: {
    getProjects() {
      ajax
        .get("api/project")
        .then((res) => {
          // console.log(res.data.projects)
          this.$store.dispatch("setProjects", res.data.projects)})
        .catch((err) => console.log(err));
    },

    editProject(id) {
      this.$router.push({ path: `/project/${id}/edit` });
    },
    viewProject(id) {
      this.$router.push({ path: `/project/${id}/details` });
    },
    deleteProject(id) {
      ajax.delete(`http://localhost:3000/api/project/${id}`)
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
    fieldFormat: function (row, column) {
      var field = row[column.property];
      if (field == undefined) {
        return "";
      } else {
        console.log("field:" + typeof field);
        field.forEach(function (value) {
          if (value.length > 1) {
            console.log("value:" + value);
            value.shift();
            console.log("value:" + value);
          }
        });
        return field.join(" , ");
      }
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

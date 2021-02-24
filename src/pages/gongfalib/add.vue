<template>
  <div>
    <el-form
      ref="formProject"
      :inline="false"
      :model="formProject"
      :rules="rules"
    >
      <el-row :gutter="20" align="middle" justify="space-between" type="flex">
        <el-col :span="8">
          <el-form-item label="工法名称">
            <el-input
              v-model="formProject.name"
              placeholder="XX工法"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="编制单位">
            <el-input
              v-model="formProject.department"
              placeholder="XX技术公司"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="编写人">
            <el-input v-model="formProject.leader" placeholder="xxx"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20" align="bottom" justify="space-between" type="flex">
        <el-col :span="8">
          <el-form-item label="工法年度">
            <br />
            <el-select
              v-model="formProject.year"
              placeholder="请选择"
              class="ddlWidth"
            >
              <el-option
                v-for="item in options_year"
                :key="item.value_year"
                :label="item.label_year"
                :value="item.value_year"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="工法等级">
            <br />
            <el-select
              v-model="formProject.year"
              placeholder="请选择"
              class="ddlWidth"
            >
              <el-option
                v-for="item in options_year"
                :key="item.value_year"
                :label="item.label_year"
                :value="item.value_year"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="技术领域">
            <el-cascader
              :props="props"
              :options="options_techField"
              class="ddlWidth"
              v-model="formProject.techField"
              multiple
              :show-all-levels="false"
              placeholder="请选择"
            ></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="内容摘要">
            <el-input
              type="textarea"
              :rows="3"
              v-model="formProject.innovation"
              placeholder="xxx"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
     
      <el-form-item>
        <el-upload
              class="upload-demo"
              ref="upload"
              action="http://localhost:3000/api/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false"
            >
              <template #trigger>
                <el-button size="small" type="primary">选取文件</el-button>
              </template>
              <el-button
                style="margin-left: 10px"
                size="small"
                type="success"
                @click="submitUpload"
                >上传到服务器</el-button
              >
              <template #tip>
                <div class="el-upload__tip">
                  只能上传 doc 文件，且不超过 5Mb
                </div>
              </template>
            </el-upload>
        <el-button type="primary" @click="onSubmit(formProject)"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ajax from "../../service/ajax";

export default {
  data() {
    return {
      formProject: {
        year: "2020",
        name: "科技创新管理系统",
        department: "技术中心",
        leader: "豆志远",
        startDate: "",
        completeDate: "",
        budget: "20",
        techField: "",
        techSource: "",
        purpose: "123",
        implementation: "456",
        technology: "789",
        innovation: "12345",
      },
      options_year: [
        {
          value_year: "2020",
          label_year: "2020",
        },
        {
          value_year: "2021",
          label_year: "2021",
        },
        {
          value_year: "2022",
          label_year: "2022",
        },
        {
          value_year: "2023",
          label_year: "2023",
        },
        {
          value_year: "2024",
          label_year: "2024",
        },
      ],
      year: "",

      options_techSource: [
        {
          value_techSource: "原始创新",
          label_techSource: "原始创新",
        },
        {
          value_techSource: "集成创新",
          label_techSource: "集成创新",
        },
        {
          value_techSource: "引进消化吸收再创新",
          label_techSource: "引进消化吸收再创新",
        },
      ],
      techSource: "",
      props: { multiple: true },
      options_techField: [
        {
          value: "工业安装工程",
          label: "工业安装工程",
          children: [
            {
              value: "管道",
              label: "管道",
            },
            {
              value: "设备",
              label: "设备",
            },
            {
              value: "电仪",
              label: "电仪",
            },
            {
              value: "输变电",
              label: "输变电",
            },
            {
              value: "防保砌筑",
              label: "防保砌筑",
            },
            {
              value: "机械",
              label: "机械",
            },
            {
              value: "焊接检测",
              label: "焊接检测",
            },
            {
              value: "调试",
              label: "调试",
            },
          ],
        },
        {
          value: "房屋建筑工程",
          label: "房屋建筑工程",
          children: [
            {
              value: "地基与基础",
              label: "地基与基础",
            },
            {
              value: "主体结构",
              label: "主体结构",
            },
            {
              value: "钢结构",
              label: "钢结构",
            },
            {
              value: "水电智能",
              label: "水电智能",
            },
          ],
        },
        {
          value: "土木工程",
          label: "土木工程",
          children: [
            {
              value: "市政交通",
              label: "市政交通",
            },
            {
              value: "水利环境",
              label: "水利环境",
            },
            {
              value: "矿山",
              label: "矿山",
            },
          ],
        },
        {
          value: "其它",
          label: "其它",
          children: [
            {
              value: "信息技术",
              label: "信息技术",
            },
            {
              value: "安全技术",
              label: "安全技术",
            },
            {
              value: "装备制造",
              label: "装备制造",
            },
            {
              value: "其它",
              label: "其它",
            },
          ],
        },
      ],

      rules: {
        year: [{ required: true, message: "请输入年度", trigger: "blur" }],
        name: [{ required: true, message: "请输入项目名称", trigger: "blue" }],
      },
    };
  },
  computed: {
    userId() {
      return this.$store.getters.userId;
    },
  },
  mounted() {
    //console.log( this.$store.state.login.userInfo.token)
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    onSubmit(formProject) {
      ajax
        .post("api/project", formProject)
        .then((res) => {
          this.feedback = res.data;
          console.log(this.feedback);
          this.$router.push("/project/list");
        })
        .catch((error) => {
          console.log("err+" + error);
        });
    },
  },
};
</script>

<style>
.ddlWidth {
  width: 100%;
}
</style>

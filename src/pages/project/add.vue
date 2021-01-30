<template>
  <div>
    <el-form ref="formProject" :inline="false" :model="formProject" :rules="rules">
      <el-row :gutter="20" align="middle" justify="space-between" type="flex">
        <el-col :span="8">
          <el-form-item label="项目年度">
            <br />
            <el-select v-model="formProject.year" placeholder="请选择" class="ddlWidth">
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
          <el-form-item label="项目名称">
            <el-input v-model="formProject.name" placeholder="XX关键技术研究"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申报单位">
            <el-input v-model="formProject.department" placeholder="XX技术公司"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20" align="bottom" justify="space-between" type="flex">
        <el-col :span="8">
          <el-form-item label="项目负责人">
            <el-input v-model="formProject.leader" placeholder="xxx"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计划开始时间">
            <el-date-picker
              class="ddlWidth"
              v-model="formProject.startDate"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              placeholder="请选择时间"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计划结束时间">
            <el-date-picker
              class="ddlWidth"
              v-model="formProject.completeDate"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              placeholder="请选择时间"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="项目预算">
            <el-input v-model="formProject.budget" placeholder="xxx"></el-input>
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
        <el-col :span="8">
          <el-form-item label="技术来源">
            <el-select class="ddlWidth" v-model="formProject.techSource" multiple placeholder="请选择">
              <el-option
                v-for="item in options_techSource"
                :key="item.value_techSource"
                :label="item.label_techSource"
                :value="item.value_techSource"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="研究目的">
            <el-input type="textarea" :rows="3" v-model="formProject.purpose" placeholder="xxx"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="组织实施方式">
            <el-input type="textarea" :rows="3" v-model="formProject.implementation" placeholder></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="核心技术">
            <el-input type="textarea" :rows="3" v-model="formProject.technology" placeholder></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="主要创新点">
            <el-input type="textarea" :rows="3" v-model="formProject.innovation" placeholder="xxx"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="onSubmit(formProject)">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'



export default {
  data() {
    return {
      formProject: {
        year: '2020',
        name: '科技创新管理系统',
        department: '技术中心',
        leader: '豆志远',
        startDate: '',
        completeDate: '',
        budget: '20',
        techField: '',
        techSource: '',
        purpose: '123',
        implementation: '456',
        technology: '789',
        innovation: '12345'
      },
      options_year: [
        {
          value_year: '2020',
          label_year: '2020'
        },
        {
          value_year: '2021',
          label_year: '2021'
        },
        {
          value_year: '2022',
          label_year: '2022'
        },
        {
          value_year: '2023',
          label_year: '2023'
        },
        {
          value_year: '2024',
          label_year: '2024'
        }
      ],
      year: '',

      options_techSource: [
        {
          value_techSource: '原始创新',
          label_techSource: '原始创新'
        },
        {
          value_techSource: '集成创新',
          label_techSource: '集成创新'
        },
        {
          value_techSource: '引进消化吸收再创新',
          label_techSource: '引进消化吸收再创新'
        }
      ],
      techSource: '',
      props: { multiple: true },
      options_techField: [
        {
          value: '工业安装工程',
          label: '工业安装工程',
          children: [
            {
              value: '管道',
              label: '管道'
            },
            {
              value: '设备',
              label: '设备'
            },
            {
              value: '电仪',
              label: '电仪'
            },
            {
              value: '输变电',
              label: '输变电'
            },
            {
              value: '防保砌筑',
              label: '防保砌筑'
            },
            {
              value: '机械',
              label: '机械'
            },
            {
              value: '焊接检测',
              label: '焊接检测'
            },
            {
              value: '调试',
              label: '调试'
            }
          ]
        },
        {
          value: '房屋建筑工程',
          label: '房屋建筑工程',
          children: [
            {
              value: '地基与基础',
              label: '地基与基础'
            },
            {
              value: '主体结构',
              label: '主体结构'
            },
            {
              value: '钢结构',
              label: '钢结构'
            },
            {
              value: '水电智能',
              label: '水电智能'
            }
          ]
        },
        {
          value: '土木工程',
          label: '土木工程',
          children: [
            {
              value: '市政交通',
              label: '市政交通'
            },
            {
              value: '水利环境',
              label: '水利环境'
            },
            {
              value: '矿山',
              label: '矿山'
            }
          ]
        },
        {
          value: '其它',
          label: '其它',
          children: [
            {
              value: '信息技术',
              label: '信息技术'
            },
            {
              value: '安全技术',
              label: '安全技术'
            },
            {
              value: '装备制造',
              label: '装备制造'
            },
            {
              value: '其它',
              label: '其它'
            }
          ]
        }
      ],

      rules: {
        year: [{ required: true, message: '请输入年度', trigger: 'blur' }],
        name: [{ required: true, message: '请输入项目名称', trigger: 'blue' }]
      }
    }
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    }
  },
  methods: {
    onSubmit(formProject) {
      axios
        .post('http://localhost:3000/api/project', formProject)
        .then((res) => {
          this.feedback = res.data
          console.log(this.feedback)
          this.$router.push('/project/list')
        })
        .catch((error) => {
          console.log('err+' + error)
        })
    }
  }
}
</script>

<style>
.ddlWidth {
  width: 100%;
}
</style>

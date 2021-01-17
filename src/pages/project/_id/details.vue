<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="项目基本情况" name="1">
      <el-row :gutter="20">
        <el-col :span="2">
          <div class="grid-content bg-purple">项目年度:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.year}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">项目名称:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.name}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">承担单位:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.department}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">项目负责人:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.leader}}</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">
          <div class="grid-content bg-purple">计划开始时间:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.startDate | dateFormat}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">计划完成时间:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.completeDate | dateFormat}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">技术领域:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.techField | fieldFormat}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">技术来源:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.techSource | sourceFormat}}</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">
          <div class="grid-content bg-purple">经费预算:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.budget}}万元</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">申请创建时间:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{ project.createOn | dateFormat1}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">最后修改时间:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.modifyOn | dateFormat1}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">申请书当前状态:</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{project.status | statusFormat}}</div>
        </el-col>
      </el-row>
    </el-collapse-item>
    <el-collapse-item title="研究目的" name="2">
      <div>{{project.purpose}}</div>
    </el-collapse-item>
    <el-collapse-item title="项目组织实施方法" name="3">
      <div>{{project.implementation}}</div>
    </el-collapse-item>
    <el-collapse-item title="核心技术" name="4">
      <div>{{project.technology}}</div>
    </el-collapse-item>
    <el-collapse-item title="主要创新点" name="4">{{project.innovation}}</el-collapse-item>
    <el-button
      v-show="project.status=='review' && userType=='admin'"
      type="primary"
      @click="dialogFormVisible = true"
    >添加评审意见</el-button>
    <el-button v-show="project.status=='edit'" type="primary" @click="onSubmit(project._id)">提交评审</el-button>
    <el-button
      v-show="project.status=='review' && userType=='admin'"
      type="primary"
      @click="onReject(project._id)"
    >退回修改</el-button>
    <el-button
      v-show="project.status=='review' && userType=='admin'"
      type="primary"
      @click="onPass(project._id)"
    >评审通过,</el-button>
    <el-button
      v-show="project.status=='review' && userType=='admin'"
      type="primary"
      @click="onFailed(project._id)"
    >退回,不予通过</el-button>

    <el-dialog title="添加评审意见" :visible.sync="dialogFormVisible">
      <el-form :model="formComment">
        <el-form-item label="评审意见" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="3" v-model="formComment.comment" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onComment(formComment)">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {
      formProject: {
        _id: '',
        year: '',
        name: '',
        department: '',
        leader: '',
        startDate: '',
        completeDate: '',
        budget: '',
        techField: '',
        techSource: '',
        purpose: '',
        implementation: '',
        technology: '',
        innovation: '',
        createOn: '',
        creator: '',
        status: '',
        modifyOn: ''
      },
      dialogFormVisible: false,
      formComment: {
        comment: '',
        username:''
      },
      formLabelWidth: '120px',

      activeNames: ['1', '2', '3', '4']
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('setProject', params)
  },
  computed: {
    project() {
      return this.$store.getters.project
    },
    userType() {
      return this.$store.getters.userType
    },
    username() {
      return this.$store.getters.username
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },

    onSubmit(id) {
      const status = { status: 'review' }
      this.$axios
        .post(`http://localhost:3000/api/project/submit/${id}`, status)
        .then((res) => {
          this.feedback = res.data
          console.log(this.feedback)
          //this.$router.push('/project/list')
        })
        .catch((error) => {
          console.log('err+' + error)
        })
    },
    onReject(id) {
      const status = { status: 'edit' }

      this.$axios
        .post(`http://localhost:3000/api/project/submit/${id}`, status)
        .then((res) => {
          this.feedback = res.data
          console.log(this.feedback)
          //this.$router.push('/project/list')
        })
        .catch((error) => {
          console.log('err+' + error)
        })
    },
    onPass(id) {
      const status = { status: 'passed' }
      this.$axios
        .post(`http://localhost:3000/api/project/submit/${id}`, status)
        .then((res) => {
          this.feedback = res.data
          console.log(this.feedback)
          //this.$router.push('/project/list')
        })
        .catch((error) => {
          console.log('err+' + error)
        })
    },
    onFailed(id) {
      const status = { status: 'failed' }
      this.$axios
        .post(`http://localhost:3000/api/project/submit/${id}`, status)
        .then((res) => {
          this.feedback = res.data
          console.log(this.feedback)
          //this.$router.push('/project/list')
        })
        .catch((error) => {
          console.log('err+' + error)
        })
    },
    onComment(formComment) {
      formComment.username=this.username
      this.$axios
        .post(`http://localhost:3000/api/project/comment/${this.project._id}`, formComment)
        .then((res) => {
          dialogFormVisible = false
          this.feedback = res.data
          console.log(this.feedback)
          //this.$router.push('/project/list')
        })
        .catch((error) => {
          console.log('err+' + error)
        })
    }
  },
  filters: {
    dateFormat: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.substring(0, 10)
    },
    dateFormat1: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.substring(0, 19).replace(/T/, '  ')
    },
    statusFormat: function(value) {
      if (!value) {
        return ''
      } else if (value == 'edit') {
        return '编制中'
      } else if (value == 'review') {
        return '已提交,评审中'
      } else if (value == 'success') {
        return '评审通过'
      } else if (value == 'fail') {
        return '评审不通过'
      }
    },
    fieldFormat: function(field) {
      if (field == undefined) {
        return ''
      } else {
        console.log('field:' + typeof field)
        field.forEach(function(value, index, array) {
          if (value.length > 1) {
            console.log('value:' + value)
            value.shift()
            console.log('value:' + value)
          }
        })
        return field.join(' , ')
      }
    },
    sourceFormat: function(source) {
      if (source == undefined) {
        return ''
      } else {
        return source.join(' , ')
      }
    }
  }
}
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
</style>


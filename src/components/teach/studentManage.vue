<template>
  <div id="studentManage">
    <div style="font-size: 28px;margin: 20px 30px">学员管理
      <el-button style="margin: 10px 20px" type="primary" round @click="addStudent()">添加学员</el-button>
    </div>
    <div style="margin: 0px 30px;" align="center">
      <el-table
        header-row-class-name="center"
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          type="index"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="sex"
          label="性别"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="phone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          align="center"
          prop="grade"
          label="年级">
        </el-table-column>
        <el-table-column
          align="center"
          prop="school"
          label="学校">
        </el-table-column>
        <el-table-column
          align="center"
          prop="times"
          label="剩余卡次">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">记录</el-button>
            <el-button @click="editStudent(scope.row)"type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        style="margin-top: 30px"
        :page-size="8"
        :pager-count="11"
        layout="prev, pager, next"
        :total="88">
      </el-pagination>
    </div>
    <!--添加学员-->
    <el-dialog
      :title="addOrEidtTitle"
      :visible.sync="addOrEidt"
      width="25%"
      :close-on-click-modal="false">
      <el-form :model="studentForm"
               ref="studentForm"
               label-width="130px">
        <el-form-item label="姓名："
                      prop="name">
          <el-input v-model="studentForm.name"
                    maxlength="20">
          </el-input>
        </el-form-item>
        <el-form-item label="性别："
                      prop="sex">
          <el-radio v-model="studentForm.sex" label="1">男</el-radio>
          <el-radio v-model="studentForm.sex" label="2">女</el-radio>
        </el-form-item>

        <el-form-item label="联系方式："
                      prop="phone">
          <el-input v-model="studentForm.phone"
                    maxlength="11">
          </el-input>
        </el-form-item>
        <el-form-item label="年级："
                      prop="grade">
          <el-input v-model="studentForm.grade"
                    maxlength="50">
          </el-input>

        </el-form-item>
        <el-form-item label="学校："
                      prop="school">
          <el-input v-model="studentForm.school"
                    maxlength="50">
          </el-input>
        </el-form-item>
        <el-form-item label="账号："
                      prop="account">
          <el-input v-model="studentForm.account"
                    maxlength="30">
          </el-input>
        </el-form-item>
        <el-form-item label="密码："
                       prop="passWord">
          <el-input v-model="studentForm.passWord"
                    maxlength="30">
          </el-input>
        </el-form-item>
        <el-form-item label="学习卡次："
                      prop="times">
          <el-input v-model="studentForm.times"
                    maxlength="30">
          </el-input>
        </el-form-item>
        <el-form-item>
            <div v-if="add">
            <el-button @click="addOrEidt = false">取消</el-button>
            <el-button @click="submitForm('ruleForm')">添加</el-button>
            </div>
          <div v-if="!add">
            <el-button @click="submitForm('ruleForm')">删除账户</el-button>
            <el-button @click="submitForm('ruleForm')">修改</el-button>
          </div>
        </el-form-item>
      </el-form>

    </el-dialog>

    <!--记录-->
    <el-dialog
      :title="studentNameTitle"
      :visible.sync="recode"
      width="60%"
      :close-on-click-modal="false">
      <el-table
        :data="tableData1"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          type="index"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="课程名称"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="date"
          label="开始时间">
        </el-table-column>
        <el-table-column
          align="center"
          prop="date"
          label="结束时间"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop=""
          label=""
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="学习次卡">
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 30px;margin-left: 30%"
        :page-size="8"
        :pager-count="11"
        layout="prev, pager, next"
        :total="88">
      </el-pagination>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
  .center th .cell{
    text-align: center !important;
  }




</style>

<script>
  import $ from "jquery";
  export default{
    name: "studentManage",
    data () {
      const item = {
        name: '王小虎',
        sex: '2',
        phone: '13888888888',
        grade: '一年级',
        school: '第一中心小学',
        times: 55,
      };
      const item1 = {
      date: '2016-05-02',
        name: '王小虎',
        address: '1518'};
      return {
        tableData: Array(10).fill(item),
        modification: false,
        recode: false,
        tableData1: Array(10).fill(item1),
        addOrEidt: false,
        add:true,
        addOrEidtTitle:"",
        studentNameTitle: "",
        studentForm:{
          name:'',
          sex:'1',
          phone:'',
          grade:'',
          school:'',
          account:'',
          passWord:'',
          times:'',
        }

      }
    },
    methods:{
      handleClick(val){
        this.studentNameTitle = val.name;
        this.recode = true;
      },
      addStudent(val) {
        this.addOrEidtTitle = "添加学员";
        this.studentForm.name= "";
        this.studentForm.sex= "";
        this.studentForm.phone= "";
        this.studentForm.grade= "";
        this.studentForm.school= "";
        this.studentForm.times= "";
        this.add = true;
        this.addOrEidt = true;
      },
      editStudent(val) {
        this.studentForm.name= val.name;
        this.studentForm.sex= val.sex;
        this.studentForm.phone= val.phone;
        this.studentForm.grade= val.grade;
        this.studentForm.school= val.school;
        this.studentForm.times= val.times;



        this.addOrEidtTitle = "编辑学员";
        this.add = false;
        this.addOrEidt = true;
      }
    }

  }
</script>

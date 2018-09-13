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
          prop="residueDegree"
          label="剩余卡次">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">记录</el-button>
            <el-button @click="edieStudent(scope.row)"type="text" size="small">编辑</el-button>
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
    <!--添加编辑学员-->
    <el-dialog
      title="提示"
      :visible.sync="modification"
      width="30%"
      :close-on-click-modal="false">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modification = false">取 消</el-button>
        <el-button type="primary" @click="modification = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--记录-->
    <el-dialog
      :title="studentName"
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

  .el-dialog__header {
    font-size: 20px;
  }
</style>

<script>
  export default{
    name: "studentManage",
    data () {
      const item = {
        name: '王小虎',
        sex: '男',
        phone: '13888888888',
        grade: '一年级',
        school: '第一中心小学',
        residueDegree: 55,
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
        studentName: "",


      }
    },
    methods:{
      handleClick(val){
        this.studentName = val.name;
        this.recode = true;
      },
      addStudent(val) {
        this.modification = true;
      },
      edieStudent(val) {
        this.modification = true;
      }
    }

  }
</script>

<template>
  <div id="financeManage">
    <div style="font-size: 28px;margin: 20px 30px">财务管理</div>
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
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="sex"
          label="收入"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="phone"
          label="人数">
        </el-table-column>
        <el-table-column
          align="center"
          prop="grade"
          label="直播时间">
        </el-table-column>
        <el-table-column
          align="center"
          prop="school"
          label="金额">
        </el-table-column>
        <el-table-column
          align="center"
          prop="times"
          label="">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination

        style="margin-top: 30px;height: 20px;margin-bottom: -50px;"

        :page-size="8"
        :pager-count="11"
        layout="prev, pager, next"
        :total="88">
      </el-pagination>
      <div align="left" style="margin-left: 60px">
        <el-button style="width: 150px;font-size: 22px;">总报表</el-button>
        <el-button style="width: 150px;font-size: 22px;">年度报表</el-button>
        <el-button style="width: 150px;font-size: 22px;">月报表</el-button>
        <el-button style="width: 150px;font-size: 22px;">周报表</el-button>
        <span style="font-size: 24px;margin-left: 160px">
          账户余额：234.5元
        </span>
      </div>

    </div>


  </div>
</template>

<style lang="scss" scoped>


</style>

<script>
  const item = {
    name: '王小虎',
    sex: '2',
    phone: '13888888888',
    grade: '一年级',
    school: '第一中心小学',
    times: 55,
  };
  export default{

    name: "financeManage",
    data () {
      return {
        tableData: Array(9).fill(item),

      }
    }
  }
</script>

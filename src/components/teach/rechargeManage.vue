<template>
  <div id="rechargeManage">
    <div style="font-size: 28px;margin: 20px 30px">充值管理</div>
    <div style="margin:0px 30px;border: 1px solid red;height: 700px">
      <div style="font-size: 18px;margin: 30px 60px;color: red"><span>会员期至：2019-09-09</span><span style="margin-left: 100px">账户余额：2019.00元</span></div>

      <div style="margin:0px 30px">

      <el-table
        border
        height="300"
        :data="tableData"
        style="width: 100%;">
        <el-table-column
          prop="date"
          label="日期"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
        >
        </el-table-column>

        <el-table-column
          prop="name"
          label="姓名"
          >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      </div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <el-radio v-model="radio" label="3">备选项</el-radio>
        <el-radio v-model="radio" label="4">备选项</el-radio>
      <span style="font-size: 18px">价格：</span><el-input v-model="input" style="width: 140px"></el-input><br/>



    </div>

  </div>
</template>

<style lang="scss" scoped>


</style>

<script>
  export default{
    name: "rechargeManage",
    data () {
      const item = {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(10).fill(item),

      }
    }
  }
</script>

<template>
    <div id="survey">
     <div class="top">
        <div class="name">王喜蛋</div>
       <div class="det">

          <div class="abc">
            总耗时：{{sumTime}}分钟  剩余：{{remainTime}}分钟
            <br>
            到期日：{{expireTime}}
          </div>
         <el-button class="btn">充值</el-button>
       </div>
     </div>
      <div class="title"><i class="el-icon-rank"></i>营收情况</div>
      <div class="def">
        <div class="leftDiv" >
          <p>总收入</p>
          <p>10000元</p>
        </div>
        <div class="rightDiv">
          <p>当月收入</p>
          <p>1000元</p>
        </div>
      </div>
      <hr>
      <div class="title"><i class="el-icon-edit-outline"></i>学员统计</div>
      <div class="def">
        <div class="leftDiv">
          <p>当月新增</p>
          <p>10人</p>
        </div>
        <div class="rightDiv">
          <p>总学员</p>
          <p>100人</p>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  @import "../../css/buttonStyle.css";
  .top {

    margin-left: 30px;
    border: none;
    height: 80px;

    background: #F9F5F5;
  }
  .name {
    margin-top: 15px;
    font-size:28px;
    margin-left: 30px;
    float: left;
  }

  .det {
    margin-top: 15px;
    margin-right: 30px;
    font-size:16px;
    float: right;
  }
  .abc {
    color:red;
    float: left;
    margin-right: 30px;
  }

  .btn {
    font-size:20px;
    float: right;
  }
  .title {
    margin: 10px 60px;
    color: blue;
    font-size:18px;
    height: 30px;

  }
  .def {
    margin: 0px 30px;
    font-size: 20px;
    height: 200px;
    color: #AAA2A2;

  }


  .leftDiv {

    float: left;
    width: 49%;
    height: 200px;
    background: #F9F5F5;
    text-align: center;

  }

  .rightDiv {

    float: right;
    width: 49%;
    height: 200px;
    background: #F9F5F5;
    text-align: center;
  }

  hr {
    width:95%;
  }
  p {
    margin-top:20px;
  }

</style>

<script>
    export default{
        name: "survey",
        data () {
            return {
              sumTime:666,
              remainTime:66,
              expireTime:'2018年12月31日'

            }
        }
    }
</script>

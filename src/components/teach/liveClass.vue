<template>
  <div id="liveClass">
    <div align="left" style="font-size: 40px; margin-left: 30px;margin-top: 20px;margin-bottom: 20px">直播设置</div>
    <div style="height: 600px;">
    <div style="margin: 0 20px;">
      <div class="leftDiv">课程名称：
        <el-input style="margin-top: 20px" v-model="className" placeholder="请输入课程名称..."></el-input><br/>
        <div style="margin: 20px">
        年级：<el-select class="grade" v-model="GradeName" placeholder="请选择年级...">
        <el-option
          v-for="item in Grades"
          :key="item.GradeName"
          :label="item.GradeName"
          :value="item.GradeName">
        </el-option>
        </el-select>
        </div>
        <div style="margin: 20px">
        次卡消耗：<el-input-number v-model="times" @change="timesChange" :min="1" :max="10" label="次卡消耗"></el-input-number>
        </div>
        <div class="picture">
          <div style="float: left;width: 60%">
            <div style="float: right;width: 250px;height: 250px;border: 1px solid red;">
              <img src=""/>
            </div>
          </div>
          <div style="float: right;width: 40%">
            <i style="line-height: 250px;margin-left: 20px" class="el-icon-circle-plus"></i>
          </div>
        </div>
        <div style="margin: 20px">
        是否录播： <el-switch v-model="isVideo"> </el-switch>
        </div>
      </div>
      <div class="rightDiv">课程描述：
        <el-input style="margin-top: 20px;margin-bottom: 20px" type="textarea" :rows="6" v-model="className" placeholder="请输入课程名称..."></el-input><br/>
        <span style="margin: 20px">学生列表</span>
        <div style="margin: 20px">
        <el-transfer v-model="value1" :data="data"></el-transfer>
        </div>
      </div>
    </div>
    </div>
    <div  align="center" style="height: 20px;margin-top: 0px;">
      <el-button plain>开始直播</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .leftDiv {
    width: 48%;
    float: left;
    font-size: 30px;
  }
  .grade {
    width: 80%;
  }

  .picture {
    height: 250px;
  }
  .rightDiv {
    width: 48%;
    float: right;
    font-size: 30px;
  }

</style>

<script>
  export default{
    name: "liveClass",
    data () {

      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 5; i++) {
          data.push({
            key: i,
            label: `管姥爷 ${ i }`,
          });
        }
        return data;
      };
      return {
        className:'',
        GradeName: '',
        times: '1',
        isVideo:false,
        Grades: [{
          GradeName: '选项1',

        }, {
          GradeName: '选项2',

        }, {
          GradeName: '选项3',

        }, {
          GradeName: '选项4',

        }, {
          GradeName: '选项5',
        }],
        data: generateData(),
        value1: [1, 4]

      }
    },
    methods: {
      timesChange(val) {

      }
    }
  }
</script>

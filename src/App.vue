<template>
  <div class="app" id="app">
    <div class="top">
      <div class="fl">学一下&nbsp;&nbsp;1+X&nbsp;&nbsp;讲师端</div>
      <div class="fr">Admin
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="down">
      <div class="left">
        <div class="leftMenu" v-for="menus in leftMenu" @click="toUrl(menus)">
            <i :class="menus.img"></i>
            <span>{{menus.menu}}</span>
        </div>

      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    components: {

    },
    name: 'app',
    data () {
      return {
        leftMenu: [
          { menu: '概览' ,
            pageName: 'survey',
            index: '1',
            img: 'el-icon-view' },
          { menu: '学员管理' ,
            pageName: 'studentManage',
            index: '2',
            img: 'el-icon-view' },
          { menu: '直播课堂' ,
            index: '3',
            img: 'el-icon-view' },
          { menu: '财务管理' ,
            index: '4',
            img: 'el-icon-view'},
          { menu: '充值管理',
            index: '5',
            img: 'el-icon-view' },
          { menu: '帮助和支持',
            index: '6',
            img: 'el-icon-question' },
        ],
        options: [{
          value: '选项1',
          label: '选项1'
        }, {
          value: '选项2',
          label: '选项2'
        }],
        value: '',
      }
    },
    mounted() {
      let wh = $(window).width();
      let whChange = function (width) {
        let whdef = 100 / 1920;// 表示1920的设计图,使用100rem的默认值
        let wW = window.innerWidth;// 当前窗口的宽度
        let rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        $('html').css('font-size', rem + "px");
      };
      whChange(wh);
      $(window).resize(function () {
        let wh = $(window).width();
        whChange(wh)
      });
    },
    updated(){

    },
    methods: {
      toUrl(val){
        this.$router.replace({name:val.pageName})
      }
    }
  }
</script>

<style>
 body {
    width: 1920px;
    height: 1080px;
    overflow: hidden;
  }
  .app {
    width: 1920px;
    height: 1080px;
    overflow: hidden;
  }
  .top {
    height: 80px;
    border: 1px solid #dedede;
    margin: 30px 30px ;
    background: #F9F5F5;
  }

   .fl  {
     float: left;
     margin-left: 30px;
     font-weight: bold;
     font-size: 20px;
     line-height:80px;
   }
   .fr {
     float: right;
     margin-right: 50px;
     font-weight: bold;
     font-size: 20px;
     line-height:80px;
   }
   .el-select {
     width: 30px;
   }

  .down {
    height: 820px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #FFFFFF;
  }

  .left {
    float: left;
    border: 1px solid #dedede;
    width: 20%;
    height: 100%;
    background: #F9EAEA;
  }

 .leftMenu {
   height: 80px;
   font-size: 26px;
   background: #ffffff;
   border: 1px solid #dedede;
   margin: 20px 20px;
   text-align: center;
   line-height:80px;
   cursor: pointer;
 }
  .right {
    float: right;
    border: 1px solid #dedede;
    width: 78%;
    height: 100%;

  }
  #studentManage .el-dialog__header {
   font-size: 20px;
 }


</style>

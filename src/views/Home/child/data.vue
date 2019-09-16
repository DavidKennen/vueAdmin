<template>
  <div class="table">
    <Title>处方监控</Title>
    <div class="main-box">
      <div class="origin">
        <p class="one">原始处方单转换监控</p>
        <div class="box">
          <el-table :data="OrginMonitor" border stripe style="width: 100%">
            <el-table-column prop="date" label="状态" width="287"></el-table-column>
            <el-table-column prop="name" label="数量" width="288"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="origin">
        <p class="two">审方监控</p>
        <div class="box">
          <el-table :data="ApprovalMonitor" border stripe style="width: 100%">
            <el-table-column prop="date" label="状态" width="287"></el-table-column>
            <el-table-column prop="name" label="数量" width="288"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
      <Title>
    安全库存监控( 16 )
    <div class="right">
      <router-link to="/more">
          更多>>
      </router-link>

     
    </div>
  </Title>
  <Security/>
  </div>

</template>

<style lang="scss">
</style>

<script>
import Title from "../../../components/Title"
import Security from "../components/security"
export default {
  data() {
    return {
      OrginMonitor: [
        {
          date: "转换成功",
          name: 22
        },
        {
          date: "转换异常",
          name: 0
        }
      ],
      ApprovalMonitor: [
        {
          date: "作废",
          name: 19
        },
        {
          date: "指令生成成功",
          name: 2
        },
        {
          date: "加工中",
          name: 53
        },
        {
          date: "指令生成异常",
          name: 0
        },
        {
          date: "结束",
          name: 0
        }
      ],
      
    };
  },
  components:{
    Title,
    Security
  },
  methods:{
    
    }
  
};
</script>
<style lang="scss" scoped>

.table {
  //右侧表格
  width: 1201px;
  height: 100%;
  .title{
    position: relative;
    overflow: hidden;
    .right{
    position: absolute;
    right :0;
    top:0;
    a{
      font-size: 14px;
      font-weight: normal;
    }
  }
  }
  
  .main-box {
    //处方监控小盒子样式
    padding: 10px 0 20px;
    overflow: hidden;
    border-left: 1px solid rgba(228, 228, 228, 1);
    border-right: 1px solid rgba(228, 228, 228, 1);
    
    .origin {
      float: left;
      width: 50%;
      .box {
        padding: 9px 12px 0;
      }
      p {
        height: 36px;
        line-height: 36px;
        width: 100%;
      }

      .one {
        background-color: #ffe1c4;
      }
      .two {
        background-color: #7aafcf;
      }
    }
  }
}
</style>
<style lang="scss">


</style>
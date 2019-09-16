<template>
  <div class="table-data">
    <Title>处方对账单</Title>
    <div class="home-money">
      <el-row>
        <el-col :span="6">
          <div class="el-col-box">
            <img src="../../../assets/home/1.png" alt />
            <div>
              <p class="home-one-p">今日订单总数</p>
              <p class="home-two-p">200</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="el-col-box">
            <img src="../../../assets/home/2.png" alt />
            <div>
              <p class="home-one-p">今日销售总额</p>
              <p class="home-two-p">￥5000</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="el-col-box">
            <img src="../../../assets/home/3.png" alt />
            <div>
              <p class="home-one-p">昨日销售总额</p>
              <p class="home-two-p">￥5000</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="el-col-box">
            <img src="../../../assets/home/4.jpg" alt />
            <div>
              <p class="home-one-p">近7天销售总额</p>
              <p class="home-two-p">￥50000.00</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

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
        <router-link to="/more">更多>></router-link>
      </div>
    </Title>
    <Security />
  </div>
</template>

<style lang="scss">
</style>

<script>
import Title from "../../../components/Title";
import Security from "../components/security";
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
      ]
    };
  },
  components: {
    Title,
    Security
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.table-data {
  //右侧表格
  width: 1201px;
  height: 100%;
  .title {
    position: relative;
    overflow: hidden;
    .right {
      position: absolute;
      right: 0;
      top: 0;
      a {
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
.home-money {
  margin: 10px 0;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    .el-col-box {
      height: 100%;
      text-align: left;
      display: flex;
      align-items: center;
      img {
        margin-left: 20px;
        margin-right: 8px;
        width: 52px;
        height: 48px;
        display: inline-block;
      }
      .home-one-p {
        font-size: 16px;
        font-weight: 400;
      }
      .home-two-p {
        font-size: 20px;
      }
    }
    margin-right: 24px;
    width: 282px;
    height: 100px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    border-radius: 4px;
  }
  .el-col:nth-of-type(4) {
    margin-right: 0;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
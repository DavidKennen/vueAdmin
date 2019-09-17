<template>
  <div>
    <div class="select" style="width:100%">
      <div class="box-left">
        <h5>筛选查询</h5>
        <div class="left-block">
          <div class="wd811">
            <div class="fl">
              <span>医疗机构</span>
              <input type="text" placeholder="请输入医疗机构名称" />
            </div>
            <div class="fl">
              <span>患者姓名</span>
              <input type="text" placeholder="请输入姓名" />
            </div>

            <div class="select-btn">搜索</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-box">
      <div class="origin">
        <p class="one">原始处方单转换监控</p>
        <div class="box">
          <el-table :data="OrginMonitor" border stripe style="width: 100%">
            <el-table-column prop="date" label="状态" width="292"></el-table-column>
            <el-table-column prop="name" label="数量" width="288"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="origin">
        <p class="two">审方监控</p>
        <div class="box">
          <el-table :data="ApprovalMonitor" border stripe style="width: 100%">
            <el-table-column prop="date" label="状态" width="292"></el-table-column>
            <el-table-column prop="name" label="数量" width="288"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initDate: "",
      endDate: "",
      tableData: [
        {
          index: 0,
          name: "患者姓名",
          medical: "医疗机构",
          business: "业务类型",
          agreement: "协定方",
          state: "当前状态",
          task: "当前作业状态",
          doctor: "医生名字",
          require: "配送要求",
          num: "快递单号",
          phone: "手机号",
          from: "来源",
          version: "版本号"
        }
      ],
      multipleSelection: [],
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

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleadd(index) {
      console.log(111, index);
    },
    handledelect() {
      console.log(222);
    }
  }
};
</script>

<style lang="scss" scoped>
.main-box {
    //处方监控小盒子样式
    padding: 10px 0 20px;
    overflow: hidden;
    
    
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
.box {
  margin-top: 10px;

  .operation {
    display: flex;
    div {
      cursor: pointer;
    }
    div:nth-of-type(1) {
      margin-right: 10px;
      margin-left: 5px;
    }
  }
}
.select {
  width: 1230px;
  display: flex;
  clear: both;
  .box-left {
    .select-btn {
      width: 79px;
      height: 32px;
      background: inherit;
      background-color: rgba(67, 142, 185, 1);
      border: none;
      border-radius: 5px;
      position: absolute;
      text-align: center;
      line-height: 32px;
      color: #fff;
      right: 127px;
      bottom: 39px;
    }
    h5 {
      line-height: 50px;
      padding-left: 10px;
      text-align: left;
      width: 1230px;
      height: 50px;
      background-color: rgba(243, 243, 243, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(228, 228, 228, 1);
      color: #666666;
    }
    .left-block {
      .wd811 {
        width: 811px;
        position: relative;
        overflow: hidden;
      }
      position: relative;
      padding: 10px 10px 0 13px;
      width: 1230px;
      height: 97px;
      line-height: 60px;
      background: inherit;
      background-color: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(228, 228, 228, 1);
      overflow: hidden;
      .fl:nth-of-type(5) {
        margin-left: 12px;
      }
      .fl:nth-of-type(6) {
        margin-left: 30px;
      }
      .fl {
        float: left;
        margin-right: 36px;
        margin-bottom: 23px;
        .el-date-editor {
          width: 75px;
          height: 32px;
        }
        input {
          width: 165px;
          height: 32px;
          font-family: "Arial Normal", "Arial";
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          text-decoration: none;
          color: #000000;
          text-align: left;
          border: 1px solid #eeeeee;
          padding-left: 5px;
        }
      }
      span {
        color: rgb(102, 102, 102);
        font-size: 14px;
        display: inline-block;
        margin-right: 10px;
      }
      select {
        width: 104px;
        height: 32px;
        font-family: "Arial Normal", "Arial";
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        text-decoration: none;
        color: #000000;
      }
    }
  }
}
</style>
<template>
  <div class="Task-flie">
    <!--
         弹出层
    -->
    <el-dialog title="选择机器类别" :visible.sync="dialogFormVisible">
      <el-input placeholder="机器类别" v-model="filterText"></el-input>
      
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false" >确 定</el-button>
      </div>
    </el-dialog>
    <!--
         弹出层
    -->
    <div class="select">
      <div class="box-left">
        <h5>筛选查询</h5>
        <div class="left-block">
          <div class="fl">
            <span>机器类别</span>
            <input
              type="text"
              placeholder="请选择机器类别"
              v-model="machine"
              @click="dialogFormVisible = true"
            />
          </div>

          <div class="fl">
            <span>名称</span>
            <input type="text" placeholder="患者姓名/手机号" />
          </div>

          <div class="select-btn">搜索</div>
        </div>
      </div>
      <div class="box-right">
        <h5>操作</h5>
        <div class="btn-box">
          <div class="btn">审方</div>
          <div class="btn">加工作业</div>
          <div class="btn">打印</div>
          <div class="btn">作废</div>
        </div>
      </div>
    </div>
    <div class="box">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column prop="name" label="患者姓名" width="110"></el-table-column>
        <el-table-column prop="medical" label="医疗机构" show-overflow-tooltip></el-table-column>
        <el-table-column prop="business" label="业务类型" show-overflow-tooltip></el-table-column>
        <el-table-column prop="agreement" label="协定方" show-overflow-tooltip></el-table-column>
        <el-table-column prop="state" label="当前状态" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="task" label="当前作业状态" show-overflow-tooltip></el-table-column>
        <el-table-column prop="doctor" label="医生姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="require" label="配送要求" show-overflow-tooltip></el-table-column>
        <el-table-column prop="num" label="快递单号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="phone" label="收货手机号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="from" label="来源" show-overflow-tooltip></el-table-column>
        <el-table-column prop="person" label="当前操作人" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      machine: "",
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
          department: "科室",
          dose: "剂量",
          require: "配送要求",
          num: "快递单号",
          phone: "手机号",
          remarks: "医院备注",
          from: "来源",
          person: "当前操作人"
        }
      ],
      multipleSelection: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      filterText:''
    };
  },

  methods: {
    open() {
      console.log(111);
    },
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
  width: 1231px;
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
      right: 26px;
      bottom: 21px;
    }
    h5 {
      line-height: 50px;
      padding-left: 10px;
      text-align: left;
      width: 884px;
      height: 50px;
      background-color: rgba(243, 243, 243, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(228, 228, 228, 1);
      color: #666666;
    }
    .left-block {
      position: relative;
      padding: 10px 10px 0 13px;
      width: 884px;
      height: 119px;
      background: inherit;
      background-color: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(228, 228, 228, 1);
      overflow: hidden;
      .fl:nth-of-type(5) {
        margin-left: 13px;
        input {
          width: 207px;
        }
      }
      .fl:nth-of-type(6) {
        margin-left: 31px;
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
  .box-right {
    width: 317px;
    h5 {
      line-height: 50px;
      padding-left: 10px;
      text-align: left;
      width: 317px;
      height: 50px;
      background: inherit;
      background-color: rgba(243, 243, 243, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(228, 228, 228, 1);
      color: #666666;
    }
    .btn-box {
      width: 317px;
      height: 119px;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(228, 228, 228, 1);
      position: relative;
      div:nth-of-type(1) {
        top: 10px;
        left: 54px;
      }
      div:nth-of-type(2) {
        top: 10px;
        left: 194px;
      }
      div:nth-of-type(3) {
        top: 65px;
        left: 54px;
      }

      div:nth-of-type(4) {
        top: 65px;
        left: 194px;
      }

      .btn {
        height: 32px;
        width: 79px;
        text-align: center;
        color: #fff;
        background-color: rgba(122, 175, 207, 1);
        border: none;
        border-radius: 5px;
        line-height: 32px;
        letter-spacing: 2px;
        position: absolute;
        font-family: "Arial Negreta", "Arial Normal", "Arial";
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
}
</style>
<style lang="scss">
.Task-flie {
  .el-dialog {
    width: 489px;
  }
  .el-dialog__close {
    font-size: 30px;
    color: #fff;
  }
  .el-dialog__header {
    width: 489px;

    height: 64px;
    background: inherit;
    background-color: rgba(122, 175, 207, 1);
    .el-dialog__title {
      color: #fff;
    }
  }
}
</style>

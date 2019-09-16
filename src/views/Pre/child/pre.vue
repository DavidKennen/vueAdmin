<template>
  <div>
    <div class="select">
      <div class="box-left">
        <h5>筛选查询</h5>
        <div class="left-block">
          <div class="fl">
            <span>业务类型</span>
            <select name="business">
              <option value="全部">全部</option>
              <option value="代配颗粒">代配颗粒</option>
              <option value="代配颗粒">代配颗粒</option>
              <option value="代配颗粒">代配颗粒</option>
              <option value="代配颗粒">代配颗粒</option>
            </select>
          </div>
          <div class="fl">
            <span>医疗机构</span>
            <input type="text" placeholder="请输入医疗机构名称" />
          </div>
          <div class="fl">
            <span>关键字</span>
            <input type="text" placeholder="患者姓名/手机号" />
          </div>
          <div class="fl">
            <span>协定方</span>
            <select name="agreement">
              <option value="全部">全部</option>
              <option value="是">是</option>
              <option value="否">否</option>
            </select>
          </div>
          <div class="fl">
            <span>日期</span>
            <el-date-picker v-model="initDate" type="datetime" placeholder></el-date-picker>~
            <el-date-picker v-model="endDate" type="datetime" placeholder></el-date-picker>
          </div>
          <div class="fl">
            <span>来源</span>
            <select name="business">
              <option value="全部">全部</option>
              <option value="医院接口上传">医院接口上传</option>
            </select>
          </div>
          <div class="select-btn">搜索</div>
        </div>
      </div>
      <div class="box-right">
        <h5>操作</h5>
        <div class="btn-box">
          <div class="btn">新增</div>
          <div class="btn">补单</div>
          <div class="btn">导出</div>
          <div class="btn">导入</div>
          <div class="btn">模板</div>
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
        <el-table-column label="患者姓名" width="110" prop="name"></el-table-column>
        <el-table-column prop="medical" label="医疗机构" width="110" ></el-table-column>
        <el-table-column prop="business" label="业务类型" show-overflow-tooltip></el-table-column>
        <el-table-column prop="agreement" label="协定方" show-overflow-tooltip></el-table-column>
        <el-table-column prop="state" label="当前状态" show-overflow-tooltip></el-table-column>
        <el-table-column prop="task" label="当前作业状态" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="doctor" label="医生姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="require" label="配送要求" show-overflow-tooltip></el-table-column>
        <el-table-column prop="num" label="快递单号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="phone" label="收货手机号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="from" label="来源" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <div class="operation">
              <div @click="handleadd(scope.$index)">审方</div>
              <div @click="handledelect">作废</div>
            </div>
          </template>
        </el-table-column>
      </el-table>
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
          index:0,
          name: "患者姓名",
          medical:"医疗机构",
          business:"业务类型",
          agreement:"协定方",
          state:"当前状态",
          task:"当前作业状态",
          doctor:"医生名字",
          require:"配送要求",
          num:"快递单号",
          phone:"手机号",
          from: "来源"
        }
      ],
      multipleSelection: []
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
    handleadd(index){
      console.log(111,index)

    },
    handledelect(){
      console.log(222)
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin-top: 10px;
 
  .operation {
    display: flex;
    div{
      cursor: pointer;
    }
    
    div:nth-of-type(1) {
      margin-right: 10px;
      margin-left: 5px;
    }
    div:nth-of-type(1):hover{
      color:rgb(0,128,0);
    }
    div:nth-of-type(2):hover{
      color:rgb(255,153,0);
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
      width: 811px;
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
      width: 811px;
      height: 119px;
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
  .box-right {
    width: 390px;
    h5 {
      line-height: 50px;
      padding-left: 10px;
      text-align: left;
      width: 390px;
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
      width: 390px;
      height: 119px;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(228, 228, 228, 1);
      position: relative;
      div:nth-of-type(1) {
        top: 10px;
        left: 48px;
      }
      div:nth-of-type(2) {
        top: 10px;
        left: 172px;
      }
      div:nth-of-type(3) {
        top: 65px;
        left: 48px;
      }
      div:nth-of-type(4) {
        top: 65px;
        left: 172px;
      }
      div:nth-of-type(5) {
        top: 65px;
        left: 297px;
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
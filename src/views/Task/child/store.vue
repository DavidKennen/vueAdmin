<template>
  <div>
    <div class="select" style="width:100%">
      <div class="box-left">
        <h5>筛选查询</h5>
        <div class="left-block">
          <div class="wd811">
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
              <span>仓库</span>
              <select name="business">
                <option value="全部">全部</option>
                <option value="代配颗粒">代配颗粒</option>
                <option value="代配颗粒">代配颗粒</option>
                <option value="代配颗粒">代配颗粒</option>
                <option value="代配颗粒">代配颗粒</option>
              </select>
            </div>
            <div class="fl">
              <span>发货类型</span>
              <select name="business">
                <option value="全部">全部</option>
                <option value="代配颗粒">代配颗粒</option>
                <option value="代配颗粒">代配颗粒</option>
                <option value="代配颗粒">代配颗粒</option>
                <option value="代配颗粒">代配颗粒</option>
              </select>
            </div>

            <div class="select-btn">搜索</div>
          </div>
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
         <el-table-column prop="business" label="业务类型" show-overflow-tooltip></el-table-column>
        <el-table-column prop="delivery" label="发货类型" show-overflow-tooltip></el-table-column>
                <el-table-column prop="store" label="仓库" width="110"></el-table-column>
        <el-table-column prop="off" label="启用标志" show-overflow-tooltip></el-table-column>
        <el-table-column prop="person" label="创建人员" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="update" label="最后更新人员" show-overflow-tooltip></el-table-column>
        <el-table-column prop="endUpdate" label="最后更新时间" show-overflow-tooltip></el-table-column>
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
          index: 0,
          business: "业务类型",
          delivery: "发货类型",
          store: "仓库",
          off: "启用标志",
          person: "创建人员",
          update: "最后更新人员",
          endUpdate: "最后更新时间"
        }
      ],
      multipleSelection: [],
    
     
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
.box{
    margin-top: 10px;
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
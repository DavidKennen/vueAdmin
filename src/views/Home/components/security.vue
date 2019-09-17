<template>
  <div class="security">
    <div class="box">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
      
      >
        <el-table-column width="55" label="序号" prop="index">
        </el-table-column>
        <el-table-column label="仓库" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="批号" width="120"></el-table-column>
        <el-table-column prop="available" label="可用量" show-overflow-tooltip></el-table-column>
        <el-table-column prop="actual" label="实际现存量" show-overflow-tooltip></el-table-column>
        <el-table-column prop="occupying" label="占用量" show-overflow-tooltip></el-table-column>
        <el-table-column prop="expired" label="过期数量

" show-overflow-tooltip></el-table-column>
        <el-table-column prop="inventory" label="库存状态" show-overflow-tooltip></el-table-column>
        <el-table-column prop="remarks" label="备注" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
    name:"security",
  data() {
    return {
      tableData: [
        {
          index:1,
          date: "仓库",
          name: "批号",
          available: "可用量",
          actual:"实际现存量",
          occupying:"占用量",
          expired:"过期数量",
          inventory:"库存状态",
          remarks:"备注"

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
    }
 
  }
};
</script>

<style >
.security{
  margin-top:10px;
}
</style>
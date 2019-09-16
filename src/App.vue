<template>
  <div id="app">
 
    <router-view/>
  </div>
</template>

<style lang="scss">
#el-container {
  width: 1450px;
  margin: 0 auto;
}
.el-header {
  height: 50px !important;
  border-bottom: 2px solid #464b56;
  background-color: #585e6b;
}
.el-aside {
  background-color: #e9eef3;
  color: #333;
}

body .el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  overflow: hidden;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

  .box {
    .el-table .cell,
    .el-table th div,
    .el-table--border td:first-child .cell,
    .el-table--border th:first-child .cell {
      text-align: center;
    }
    .el-table th {
      background-color: #fafafa;
      color: #333333;
      font-weight: 700;
    }
  }

</style>

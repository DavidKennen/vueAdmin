<template>
  <div class="home">
    <el-container>
      <el-header>
        <Nav />
      </el-header>

      <el-container id="el-container">
        <el-aside width="200px">
          <Silder>
            <router-link to="/home">
              <span class="circle"></span> 数据概览
            </router-link>
          </Silder>
        </el-aside>

        <el-main>
          <Data />
        </el-main>
      </el-container>
    </el-container>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

import Data from "./child/data";
export default {
  name: "home",

  components: {
    //组件注册
    Data
  }
};
</script>
<style lang="scss">

</style>
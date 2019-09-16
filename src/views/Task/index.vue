<template>
  <div class="home">
    <el-container>
      <el-header>
        <Nav />
      </el-header>

      <el-container id="el-container">
        <el-aside width="200px">
          <Silder>
            <router-link to="/task/console">
              <span class="circle"></span> 作业控制台
            </router-link>
            <router-link to="/task/store">
              <span class="circle"></span> 作业仓库
            </router-link>
            <router-link to="/task/link">
              <span class="circle"></span> 作业环节
            </router-link>
            <router-link to="/task/process">
              <span class="circle"></span> 作业流程
            </router-link>
            <router-link to="/task/terminal">
              <span class="circle"></span> 作业配置终端
            </router-link>
            <router-link to="/task/category">
              <span class="circle"></span> 机器类别
            </router-link>
            <router-link to="/task/file">
              <span class="circle"></span> 机器档案
            </router-link>
          </Silder>
        </el-aside>

        <el-main>
            <router-view />
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",

  components: {
    //组件注册
  }
};
</script>
<style lang="scss">

</style>
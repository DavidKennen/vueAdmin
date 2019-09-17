<template>
  <div class="home">
    <el-container>
      <el-header>
        <Nav />
      </el-header>

      <el-container id="el-container">
        <el-aside width="200px">
          <Silder>
            <router-link to="/admin/option">
              <span class="circle"></span> 权限管理
            </router-link>
             <router-link to="/admin/person">
              <span class="circle"></span> 个人中心
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
export default {
  components: {
    //组件注册
  }
};
</script>
<style lang="scss">

</style>
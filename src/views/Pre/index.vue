<template>
  <div>
    <div class="box">
        <el-container>
      <el-header>
        <Nav />
      </el-header>

      <el-container id="el-container">
        <el-aside width="200px">
          <Silder>
            <router-link to="/prevent/pre">
              <span class="circle"></span> 处方单
            </router-link>
             <router-link to="/prevent/original">
              <span class="circle"></span> 原始处方单
            </router-link>
             <router-link to="/prevent/monitor">
              <span class="circle"></span> 处方监控
            </router-link>
             <router-link to="/prevent/revise">
              <span class="circle"></span> 处方修订
            </router-link>
          </Silder>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  beforeCreate(){
  
  
  },
  

  methods: {
 
  }
};
</script>

<style lang="scss">

</style>
<template>
  <div class="nav">
    <h1 class="cap-name">配送中心后台系统</h1>
    <ul class="list">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/prevent">处方受理</router-link>
      </li>
      <li>
        <router-link to="/task">加工作业</router-link>
      </li>
      <li>
        <router-link to="/file">档案管理</router-link>
      </li>
      <li>
        <router-link to="/sale">销售预算</router-link>
      </li>
      <li>
        <router-link to="/stock">库存管理</router-link>
      </li>
      <li>
        <router-link to="/delivery">物流配送</router-link>
      </li>
       <li>
        <router-link to="/admin">系统设置</router-link>
      </li>
    </ul>
    <div class="logout">
      <div class="username">
        <router-link to="/admin">
          admin
        </router-link>
      </div>
      <span></span>
      <div class="logout-btn">
        <img src="../../assets/login/logout.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
//配送中心标题

.nav {
  height: 50px;
  line-height: 50px;
  font-size: #fff;
  overflow: hidden;
  .cap-name {
    margin-left: 24px;
    font-weight: normal;
    font-size: 18px;
    float: left;
    color: #fff;
  }
  //导航列表
  ul {
    overflow: hidden;
    margin-left: 46px;
    float: left;

    li {
      float: left;
      .router-link-active {
        background-color: rgba(255, 255, 255, 0.3);
      }
      a {
        display: block;
        font-size: 12px;
        padding: 0 18px;

        color: #fff;
      }
    }
  }
  //退出
  .logout{
    float: left;
    margin-left:430px;
    div{
      float: left;
      
    }
    .logout-btn{
      position: relative;
      height: 100%;
      line-height: 50px;
      margin-left:28px;
      img{
        vertical-align: middle;
        padding-left: 15px;
        border-left: 1px solid #464b55;
      }
    }
    a{
      color: #fff;
    }
  }
}
</style>
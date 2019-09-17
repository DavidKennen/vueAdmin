<template>
  <div class="admin-option">
    <div class="tab">
      <ul>
        <li @click="handleAdminTab(0)" :class=" activeIndex ===0 ? activedClass : '' ">账号</li>
        <li @click="handleAdminTab(1)" :class=" activeIndex ===1 ? activedClass : ''">角色</li>
      </ul>
    </div>
    <div class="item" v-show="activeIndex===0">
      <h5>筛选查询</h5>
      <div class="left-block">
        <div class="fl">
          <span>角色</span>
          <select name="agreement">
            <option value="全部">请选择</option>
          </select>
        </div>
        <div class="fl">
          <span>姓名</span>
          <input type="text" placeholder />
        </div>
        <div class="select-btn">搜索</div>
        <div class="addUser-btn">新增用户</div>
      </div>
      <div class="box">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          stripe
        >
          <el-table-column label="序号" width="50" prop="id"></el-table-column>
          <el-table-column label="用户名" width="110" prop="username"></el-table-column>
          <el-table-column prop="name" label="真实姓名" width="110"></el-table-column>
          <el-table-column prop="inter" label="角色" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="手机号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="update" label="上次登录时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="ip" label="上次登录IP" width="120" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <div class="operation">
                <div @click="handleEdit(scope.$index)">编辑</div>
                <div @click="handleRouter(scope.$index)">权限分配</div>
                <div @click="handleLock(scope.$index)">锁定</div>
                
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="dialog-box">
          <el-dialog title="添加/编辑-账号" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="用户名(*)">
                <el-input v-model="form.user" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="真实姓名(*)">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="角色(*)">
                <el-select v-model="form.inter" placeholder="请分配角色">
                  <el-option label="管理员" value="admin"></el-option>
                  <el-option label="客服" value="kf"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="手机号(*)">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码(*)">
                <el-input v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="医院(*)">
                <el-checkbox v-model="checkAll" @change="handleCheckAll">全选</el-checkbox>
                <el-checkbox v-for="item in hospital" :key="item.id" v-model="item.check" @change="handleChangeCheckOnce">
                  <span>{{item.name}}</span>
                </el-checkbox>
              </el-form-item>
              <el-form-item label="描述">
                 <el-input v-model="form.description" type="textarea" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
    <div class="item" v-show="activeIndex===1">
      <h5>角色列表</h5>
      <div class="left-block">
        <div class="addinter-btn">新增角色</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkAll: false,
      admin: ["账号", "角色"],
      activeIndex: 0,
      check: [],
      activedClass: "actived",
      tableData: [
        {
          id: 0,
          username: "用户名",
          name: "真实姓名",
          inter: "角色",
          phone: "手机",
          update: "上次登录时间",
          ip: "ip"
        },
        {
          id: 1,
          username: "用户名",
          name: "真实姓名",
          inter: "角色",
          phone: "手机",
          update: "上次登录时间",
          ip: "ip"
        }
      ],
      hospital: [
        { id: 0, name: "甘草医生", check: false },
        { id: 1, name: "深圳市怡康医院", check: false }
      ],
      dialogFormVisible: false,
      form: {
        id: 0,
        user: "用户名",
        name: "真实姓名",
        inter: "角色",
        password: "密码",
        desc: "",
        phone: "手机号",
        description:"描述"
      }
    };
  },
  methods: {
    handleCheckAll() {
      let b = this.hospital;
      b.forEach((item, index) => {
        item.check = this.checkAll;
      });
      this.hospital = b;
      
    },
    handleChangeCheckOnce(){
      let checkIndex = 0;
      for(let i = 0; i<this.hospital.length;i++){
        if(!this.hospital[i].check){
          this.checkAll = false;
        }
        
      }
    },
    handleAdminTab(index) {
      //选项卡
      this.activeIndex = index;
    },
    handleEdit(index) {
      //编辑
      this.dialogFormVisible = true;
      this.form.id = index;
    },
    handleRouter(index) {
      //权限分配
    },
    handleLock(index) {
      //锁定
    },
   
  }
};
</script>

<style lang="scss" scoped>
.admin-option {
  position: relative;
  .tab {
    height: 54px;
    position: relative;
    border-bottom: 10px solid rgba(122, 175, 207, 1);
    padding-bottom: 65px;
    .actived {
      background-color: rgb(67, 142, 185);
      color: #fff;
      font-weight: bold;
    }
    li {
      width: 100px;
      height: 54px;
      color: rgb(67, 142, 185);
      background: inherit inherit inherit inherit inherit inherit inherit
        inherit inherit;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(67, 142, 185);
      border-radius: 0px;
      line-height: 54px;
    }
    li:nth-of-type(1) {
      position: absolute;
      left: 104px;
      top: 10px;
    }
    li:nth-of-type(2) {
      position: absolute;
      left: 204px;
      top: 10px;
    }
  }
  .item {
    .operation {
      display: flex;
      justify-content: space-around;
      color: #169bd5;
      div {
        cursor: pointer;
      }
      div:hover {
        font-weight: bold;
      }
    }
    h5 {
      line-height: 50px;
      padding-left: 10px;
      text-align: left;
      width: 100%;
      height: 50px;
      background-color: #f3f3f3;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: #e4e4e4;
      color: #666666;
    }
    .left-block {
      .addinter-btn{
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
        left: 40px;
        bottom: 25px;
         cursor:pointer;
      }
      .addUser-btn {
        cursor: pointer;
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
        left: 600px;
        bottom: 25px;
      }
      .select-btn {
        cursor: pointer;
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
        left: 439px;
        bottom: 25px;
      }
      position: relative;
      padding: 10px 10px 0 13px;
      width: 100%;
      height: 92px;
      line-height: 80px;
      background: inherit;
      background-color: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(228, 228, 228, 1);
      overflow: hidden;
      .fl:nth-of-type(5) {
        input {
          width: 207px;
        }
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
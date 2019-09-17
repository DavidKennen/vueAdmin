<template>
  <div>
    <div class="backgroud"></div>
    <div class="login-box">
      <div class="top"></div>
      <div class="text">
        <p>
          <span>配送中心后台管理系统</span>
        </p>
      </div>
      <div class="border">
        <div :class="ufocus">
          <img src="../../assets/login/userImg.png" alt="图片链接丢失" />
          <input type="text" placeholder="请输入用户名称" @blur="hendleUBlur" @focus="handleUFocus" />
        </div>
        <div :class="pfocus">
          <img src="../../assets/login/passwordImg.png" alt="图片链接丢失" />
          <input type="text" placeholder="请输入登录密码" @blur="hendlePBlur" @focus="handlePFocus" />
        </div>
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import "../../tools/index";
export default {
  data() {
    return {
      username: "",
      password: "",
      ufocus: "",
      pfocus: ""
    };
  },
  methods: {
      //获取焦点 失去焦点添加样式
    handleUFocus() {
      this.ufocus = "focus";
    },
    hendleUBlur() {
      this.ufocus = "";
    },
    handlePFocus() {
      this.pfocus = "focus";
    },
    hendlePBlur() {
      this.pfocus = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.backgroud {
    //背景横幅
  position: fixed;
  left: 50%;
  margin-left: -719.5px;
  top: 50%;
  margin-top: -98px;
  background-color: rgba(67, 142, 185, 1);
  width: 1439px;
  height: 196px;
  z-index: -1;
}
.login-box {
    //登录盒子
  background-color: #fff;
  border-width: 0px;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  height: 420px;
  font-family: "微软雅黑 Bold", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  color: #999999;
  text-align: left;
  line-height: 20px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
  font-family: "微软雅黑 Bold", "微软雅黑";
  .top {
      //顶部小样式
    position: absolute;
    left: 0px;
    top: 0px;
    width: 350px;
    height: 10px;
    background: inherit;
    background-color: rgba(67, 142, 185, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(26, 188, 156, 1);
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: "微软雅黑 Bold", "微软雅黑";
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    color: #1abc9c;
    line-height: 28px;
  }
  .text {
    //标题
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 83px;
    width: 350px;
    height: 47px;
    font-family: "微软雅黑 Regular", "微软雅黑";
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    color: #438eb9;
    line-height: 28px;
    text-align: center;
  }
  .border {
    /*
        登录盒子
      */
    button {
      /*
          登录按钮
           */
      background-color: #438eb9;
      position: absolute;
      left: 25px;
      top: 300px;
      width: 300px;
      height: 50px;
      font-family: "微软雅黑 Regular", 微软雅黑;
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
      color: rgb(255, 255, 255);
      border-width: 0px;
      cursor: pointer;
    }
    button:hover{
        opacity: .9;
    }

    .focus {
      /*
        选中样式 
        */
      border: 2px solid #1abc9c;
    }
    div:nth-of-type(2) {
      left: 25px;
      top: 230px;
    }
    div {
      position: absolute;
      left: 25px;
      top: 160px;
      width: 300px;
      height: 50px;
      font-family: "FontAwesome";
      font-weight: 400;
      font-style: normal;
      font-size: 20px;
      color: transparent;
      border: 1px solid #eeeeee;
      border-radius: 5px;
      line-height: 50px;
      /*
      input修改提示文字 
      */
      input::-webkit-input-placeholder {
        /* WebKit browsers */

        color: #999999;
      }

      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */

        color: #999999;
      }

      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */

        color: #999999;
      }

      input:-ms-input-placeholder {
        /* Internet Explorer 10+ */

        color: #999999;
      }
      input {
        caret-color: #999999;
      }
      img {
        display: inline-block;
        margin: 15px 15px 0 15px;
      }
    }
  }
}
</style>
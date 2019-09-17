<template>
  <div class="person">
    <h5>个人中心</h5>
    <div class="dist">
      <p>
        <span>用户名</span>
        <input type="text" />
      </p>
      <p>
        <span>真实姓名</span>
        <input type="text" />
      </p>
      <p>
        <span>角色</span>
        <input type="text" />
      </p>
      <p>
        <span>手机号</span>
        <input type="text" />
      </p>
      <p>
        <span>原密码</span>
        <input type="text" />
      </p>
      <p>
        <span>新密码</span>
        <input type="text" />
        <strong>6~16位数字字母组合，区分大小写</strong>
      </p>
      <p>
        <span>新密码确认</span>
        <input type="text" />
      </p>
      <div class="edit-btn btn">编辑</div>
      <div class="submit-btn btn">确定</div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        handleBlur(){
            alert(1);
        },
        handleBlur2(){
            alert(2)
        }
    }
};
</script>

<style lang="scss">
.person {
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
  .dist {
    .btn {
      position: absolute;
      padding: 0 25px;
      text-align: center;
      height: 32px;
      line-height: 32px;
      border-radius: 5px;
      color:#fff;
      cursor: pointer;
    }
    .edit-btn {
      background-color: #7aafcf;
      bottom: 72px;
      left: 147px;
    }
    .submit-btn {
      background-color: #438eb9;
      bottom: 72px;
      left: 283px;
    }
    position: relative;
    padding-top: 17px;
    padding-left: 32px;
    position: relative;
    height: 647px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    border-top: 0px;
    text-align: left;
    p:nth-of-type(1) span {
      margin-right: 82px;
    }
    p:nth-of-type(2) span {
      margin-right: 68px;
    }
    p:nth-of-type(3) span {
      margin-right: 95px;
    }
    p:nth-of-type(4) span,
    p:nth-of-type(5) span,
    p:nth-of-type(6) span {
      margin-right: 82px;
    }
    p:nth-of-type(7) span {
      margin-right: 53px;
    }
    p:nth-of-type(6) {
      strong {
        font-size: 12px;
        color: rgb(204, 204, 204);
        font-weight: normal;
        display: inline-block;
        margin-left: 23px;
      }
    }
    p {
      margin-top: 28px;
      font-size: 14px;
      span {
        display: inline-block;
      }

      input {
        display: inline-block;

        width: 197px;
        height: 22px;
        border: 1px solid #a9a9a9;
      }
    }
  }
}
</style>
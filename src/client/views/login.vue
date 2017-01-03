<template>
  <div id="login-main">
    <img :src="loginUser">
    <mu-auto-complete hintText="请输入账号（手机号）" labelFloat v-model="account" label="账号" :dataSource="dataSource"
                      :maxHeight="120"/>
    <mu-auto-complete hintText="请输入密码" labelFloat v-model="password" label="密码" :dataSource="dataSource"
                      :maxHeight="120"/>
    <div id="button-list">
      <mu-raised-button label="提交" @click="sureEvent" class="demo-raised-button" primary/>
      <mu-raised-button id="register-btn" label="注册" @click="registerEvent" class="demo-raised-button" secondary/>
    </div>
    <infoDialog></infoDialog>
  </div>
</template>

<script>
  import loginUser from "./../assets/images/login-man.png"
  import infoDialog from "./../components/InfoDialog.vue"
  import $ from 'jquery'
  export default{
    data(){
      return {
        account: "",
        password: "",
        dataSource: [],
        loginUser
      }
    },

    components: {
      infoDialog
    },

    methods: {
      sureEvent() {
        if (this.account != "" && this.password != "") {
          this.postData()
        } else {
          this.$children[4].next = '#/login';
          this.$children[4].msg = "请输入账号与密码!";
          this.$children[4].dialog = true;
        }
      },

      postData: function () {
        var that = this;
        $.ajax({
          url: 'https://ant-express.picfood.cn/api/user/login',
          type: 'post',
          data: {
            'mobile': that.account,
            'password': that.password
          },
//          beforeSend: function (request) {
//            request.setRequestHeader("Accept", "application/x-www-form-urlencoded");
//          },
          xhrFields: {
            withCredentials: true
          },
          success: function (data) {
            that.$router.push({name: 'login'})
          },
          error: function (data) {
            that.$children[4].next = '#/login';
            that.$children[4].msg = "账号与密码错误!";
            that.$children[4].dialog = true;
          }
      }
  )
  },

  registerEvent()
  {

  }
  },

  created: function () {
    this.$parent.isShowBottom = false;
    this.$parent.isShowStepper = false;
  }
  }
</script>

<style>
  #login-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 9%;
  }

  #login-main #button-list {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  #register-btn {
    margin-left: 20px;
  }

  #login-main img {
    height: 128px;
    margin-bottom: 40px;
  }
</style>

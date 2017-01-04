<template>
  <div id="login-main">
    <img :src="loginUser">
    <mu-auto-complete hintText="请输入账号（手机号）" labelFloat v-model="account" label="账号" :dataSource="dataSource"
                      :maxHeight="120"/>
    <mu-auto-complete hintText="请输入密码" labelFloat v-model="showPassword" label="密码" :dataSource="dataSource" @blur="passwordInput"
                      :maxHeight="120"/>
    <mu-raised-button label="提交" @click="sureEvent" class="demo-raised-button" primary/>
    <closeDialog></closeDialog>
  </div>
</template>

<script>
  import closeDialog from "./../components/closeDialog.vue"
  import $ from 'jquery'
  export default{
    data(){
      return {
        account: "",
        password: "",
        dataSource: [],
        loginUser: "http://oj7mt8loy.bkt.clouddn.com/login-man.png",
        showPassword: ""
      }
    },

    components: {
      closeDialog
    },

    methods: {
      sureEvent() {
        if (this.account != "" && this.password != "") {
          this.postData()
        } else {
          console.log(this.$children);
          this.$children[3].msg = "请输入账号与密码!";
          this.$children[3].dialog = true;
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
            dataType: 'json',
            xhrFields: {
              withCredentials: true
            },
            success: function (data) {
              that.$router.push({name: 'index'})
            },
            error: function (data) {
              that.$children[3].msg = "账号与密码错误!";
              that.$children[3].dialog = true;
            }
          }
        )
      },

      passwordInput: function () {
        var starStr = "";
        for (var index = 0; index < this.showPassword.length; index ++) {
          starStr += '*';
        }
        this.password = this.showPassword;
        this.showPassword = starStr;
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

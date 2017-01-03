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
          this.postData({
            'mobile': this.account,
            'password': this.password
          })
        } else {
          this.$children[3].next = '/login';
          this.$children[3].msg = "请输入账号与密码!";
          this.$children[3].dialog = true;
        }
      },

      postData: function (parmas) {
        this.$api.post('api/user/login', parmas, function (data) {
          var error = data.error || false;
          var result = data.result || false;
          if (error) {
            this.$children[3].next = '/login';
            this.$children[3].msg = "账号或者密码错误!";
            this.$children[3].dialog = true;
          } else {
            this.$router.push({name: 'form'})
          }
        })
      },

      registerEvent() {

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

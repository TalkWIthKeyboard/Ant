<template>
  <div id="login-main">
    <img :src="loginUser">
    <mu-auto-complete hintText="请输入账号（手机号）" labelFloat v-model="account" label="账号" :dataSource="dataSource"
                      :maxHeight="120"/>
    <mu-auto-complete hintText="请输入密码" labelFloat v-model="password" label="密码" :dataSource="dataSource"
                      :maxHeight="120"/>
    <mu-raised-button label="提交" @click="sureEvent" class="demo-raised-button" primary/>
  </div>
</template>

<script>
  import loginUser from "../assets/images/login-man.png"
  import infoDialog from "../components/InfoDialog.vue"
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
          this.$children[3].next = '/user';
          this.$children[3].msg = "请输入账号与密码!";
          this.$children[3].dialog = true;
        }
      },

      postData: function (parmas) {
        this.$api.post('user/login', parmas, function (data) {
          var error = data.error || false;
          var result = data.result || false;
          if (error) {
            this.$children[3].next = '/user';
            this.$children[3].msg = "账号或者密码错误!";
            this.$children[3].dialog = true;
          } else {
            this.$router.push({name: 'form'})
          }
        })
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

  #login-main img {
    height: 128px;
    margin-bottom: 40px;
  }
</style>

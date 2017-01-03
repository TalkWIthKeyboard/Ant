<template>
  <div id="head-main">
    <div id="head-user-info">
      <mu-avatar style="height: 150px;width: 150px" slot="left" :src="headerImg"/>
      <p style="font-size: 18px;font-weight: 800">Harry Porter</p>
    </div>

    <div id="head-table">
      <mu-table>
        <mu-tbody>
          <mu-td>
            <router-link to="/user/receiving">
              <img :src="giftImg"/>
              <p>已接送包裹</p>
            </router-link>
          </mu-td>
          <mu-td>
            <router-link to="/user/sending">
              <img :src="truckImg"/>
              <p>运送中的包裹</p>
            </router-link>
          </mu-td>
        </mu-tbody>
        <mu-tbody>
          <mu-td>
            <router-link to="/user/history">
              <img :src="christmasImg"/>
              <p>历史运送</p>
            </router-link>
          </mu-td>
          <mu-td>
            <router-link to="/index">
              <img :src="skateImg"/>
              <p>登出</p>
            </router-link>
          </mu-td>
        </mu-tbody>
      </mu-table>
    </div>
  </div>
</template>

<script>
import headerImg from "../assets/images/hali.jpg"
import manImg from "../assets/images/man.png"
import womanImg from "../assets/images/woman.png"
import giftImg from "../assets/images/gift.png"
import truckImg from "../assets/images/delivery-truck.png"
import skateImg from "../assets/images/ice-skate.png"
import christmasImg from "../assets/images/christmas.png"

export default{
  data(){
    return{
      headerImg,
      manImg,
      womanImg,
      giftImg,
      truckImg,
      skateImg,
      christmasImg
    }
  },

  components:{
  },

  created: function() {
    this.$parent.$children[2].bottomNav = "user";
    this.$parent.$children[2].bottomNavColor = "user";
    this.$parent.isShowStepper = false;
    this.$parent.isShowButton = true;
  }
}
</script>

<style>
  #head-user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.7%;
    margin-bottom: 4%;
  }

  #head-main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mu-td {
    padding-bottom: 8px;
    text-align: center;
  }

  p {
    color: #424242;
  }
</style>

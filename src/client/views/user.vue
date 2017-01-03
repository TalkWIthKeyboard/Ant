<template>
  <div id="head-main">
    <div id="head-user-info">
      <mu-avatar style="height: 150px;width: 150px" slot="left" :src="headerImg"/>
      <p style="font-size: 18px;font-weight: 800">{{ item.name }}</p>
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
export default{
  data(){
    return{
      headerImg: "http://oj7mt8loy.bkt.clouddn.com/hali.jpg",
      manImg: "http://oj7mt8loy.bkt.clouddn.com/man.png",
      womanImg: "http://oj7mt8loy.bkt.clouddn.com/woman.png",
      giftImg: "http://oj7mt8loy.bkt.clouddn.com/gift.png",
      truckImg: "http://oj7mt8loy.bkt.clouddn.com/delivery-truck.png",
      skateImg: "http://oj7mt8loy.bkt.clouddn.com/ice-skate.png",
      christmasImg: "http://oj7mt8loy.bkt.clouddn.com/christmas.png",
      item: {
        name: null
      }
    }
  },

  components:{
  },

  methods: {
    getData: function () {
      var that = this;
      var url = 'https://ant-express.picfood.cn/api/user/test';
      $.ajax({
          url: url,
          type: 'get',
          dataType: 'json',
          xhrFields: {
            withCredentials: true
          },
          success: function (data) {
            that.item = data.result.user;
          },
          error: function (data) {
            console.log("error " + data);
          }
        }
      )
    }
  },

  created: function() {
    this.$parent.$children[2].bottomNav = "user";
    this.$parent.$children[2].bottomNavColor = "user";
    this.$parent.isShowStepper = false;
    this.$parent.isShowButton = true;
    this.getData();
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

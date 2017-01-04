<template>
  <div id="user-package-main">
    <Tabs></Tabs>
    <div class="main-picture">
      <img :src="history"/>
    </div>
    <mu-list style="height: 100%;">
      <mu-list-item v-for="item in lists" :title="item.parcel.str" :describeText="item.time">
        <mu-avatar slot="left" color="#474a4f" backgroundColor="#9e9e9e">{{ item.parcel.content }}</mu-avatar>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  import Tabs from "../components/Tabs.vue"
  import moment from 'moment'

  export default{
    data(){
      return {
        history: "http://oj7mt8loy.bkt.clouddn.com/clinic-history.png",
        lists: []
      }
    },

    components: {
      Tabs
    },

    methods: {
      getData: function () {
        var that = this;
        var url = 'https://ant-express.picfood.cn/api/order/finished';
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            xhrFields: {
              withCredentials: true
            },
            success: function (data) {
              that.lists = data.result;
              for (var index = 0; index < that.lists.length; index++) {
                that.lists[index].parcel.str = that.lists[index].parcel.weight + " " + that.lists[index].parcel.unit;
                that.lists[index].time = new moment(that.createdAt).format('MMMM Do YYYY');
              }
            },
            error: function (data) {
              console.log("error " + data);
            }
          }
        )
      }
    },

    created: function () {
      this.$parent.isShowStepper = false;
      this.getData();
    },

    mounted: function () {
      this.$children[0].activeTab = 'tab3';
    }
  }

</script>

<style>
  #user-package-main {
    height: 100%;
    width: 100%;
  }

  .main-picture {
    padding-top: 10px;
  }
</style>

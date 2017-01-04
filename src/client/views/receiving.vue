<template>
  <div id="user-package-main">
    <Tabs></Tabs>
    <div class="main-picture">
      <img :src="present"/>
    </div>
    <mu-list style="height: 100%;">
      <mu-list-item v-for="item in lists" :title="item.parcel.str" :describeText="item.time">
        <mu-avatar slot="left" color="#474a4f" backgroundColor="#9e9e9e">{{ item.parcel.content }}</mu-avatar>
        <mu-icon-button icon="done" @click="sureSending(item._id)" slot="right"/>
      </mu-list-item>
    </mu-list>
    <infoDialog></infoDialog>
  </div>
</template>

<script>
  import Tabs from "../components/Tabs.vue"
  import infoDialog from "../components/InfoDialog.vue"
  import moment from 'moment'
  export default{
    data(){
      return {
        present: "http://oj7mt8loy.bkt.clouddn.com/present.png",
        lists: []
      }
    },

    components: {
      Tabs,
      infoDialog
    },

    methods: {
      sureSending(id) {
        this.$children[2].next = '#/index';
        this.$children[2].msg = "确认开始运送快递？";
        this.$children[2].dialog = true;
      },

      getData: function () {
        var that = this;
        var url = 'https://ant-express.picfood.cn/api/order/confirmed';
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
      this.$children[0].activeTab = 'tab1';
    }
  }

</script>

<style>
  #user-package-main {
    height: 100%;
    width: 100%;
  }

  #main-picture {
    padding-top: 10px;
  }
</style>

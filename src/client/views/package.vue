<template>
  <div id="package-main">
    <mu-list style="height: 100%;">

      <mu-list-item v-for="item in lists" v-bind:title="item.parcel.content" v-bind:describeText="item.parcel.str">
        <mu-avatar icon="restaurant_menu" slot="leftAvatar"/>
        <mu-icon value="send" slot="right" @click="open(item._id)"/>
      </mu-list-item>
    </mu-list>
    <infoDialog></infoDialog>
  </div>
</template>

<script>
  import infoDialog from "../components/InfoDialog.vue"
  import moment from "moment"
  export default{
    data(){
      return {
        lists: []
      }
    },

    components: {
      infoDialog
    },

    methods: {
      // 模态框弹出
      open (id) {
        this.$children[1].next = '#/task/' + id;
        this.$children[1].msg = "确认传送这个包裹？";
        this.$children[1].dialog = true;
      },

      // 调用api获取数据
      getData: function () {
        var that = this;
        var url = 'https://ant-express.picfood.cn/api/parcel/path/search?start=' + this.$route.params.start + '&end=' + this.$route.params.end;
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
              console.log(that.lists);
            },
            error: function (data) {
              console.log("error " + data);
            }
          }
        )
      }
    },

    created: function () {
      this.$parent.isShowStepper = true;
      this.$parent.$children[1].activeStep = 1;
      this.getData();
    }
  }
</script>

<style>
  #package-main {
    height: 100%;
    width: 100%;
  }
</style>


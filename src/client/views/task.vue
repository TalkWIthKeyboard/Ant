<template>
  <div id="task-main">
    <img :src="qrCode">
    <div id="cell-list">
      <mt-cell title="起点" :value="item.parcelPath.start"></mt-cell>
      <mt-cell title="终点" :value="item.parcelPath.end"></mt-cell>
      <mt-cell title="物品" :value="item.parcel.content"></mt-cell>
      <mt-cell title="重量" :value="item.parcel.str"></mt-cell>
      <mt-cell title="创建时间" value="item.time"></mt-cell>
    </div>
  </div>
</template>

<script>
  import moment from "moment"
  export default{
    data(){
      return {
        qrCode: "http://oj7mt8loy.bkt.clouddn.com/qrCode.jpg",
        item: {
          parcel: {
            content: null,
            str: null
          },
          parcelPath: {
            start: null,
            end: null
          },
          createdAt: null
        }
      }
    },

    components: {},

    methods: {
      // 调用api获取数据
      getData: function () {
        var that = this;
        var url = 'https://ant-express.picfood.cn/api/parcel/path/confirm?id=' + this.$route.params.id;
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            xhrFields: {
              withCredentials: true
            },
            success: function (data) {
              that.item = data.result;
              that.item.parcel.str = that.item.parcel.weight + " " + that.item.parcel.unit;
              that.item.time = new moment(that.createdAt).format('MMMM Do YYYY');
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
      this.$parent.$children[1].activeStep = 2;
      this.getData();
    }
  }
</script>

<style>
  #task-main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  #cell-list {
    margin-top: 10px;
    width: 100%;
    height: 100%;
  }
</style>

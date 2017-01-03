<template>
  <div id="task-main">
    <img :src="qrCode">
    <div id="cell-list">
      <mt-cell title="起点" value="上海汽车城"></mt-cell>
      <mt-cell title="终点" value="同济大学"></mt-cell>
      <mt-cell title="物品" value="生活用品"></mt-cell>
      <mt-cell title="重量" value="900g"></mt-cell>
      <mt-cell title="创建时间" value="2016-10-25 00:49:40"></mt-cell>
    </div>
  </div>
</template>

<script>
import qrCode from "../assets/images/qrCode.jpg"
export default{
  data(){
    return{
      qrCode
    }
  },

  components:{

  },

  created: function () {
    this.$parent.isShowStepper = true;
    this.$parent.$children[1].activeStep = 2;
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

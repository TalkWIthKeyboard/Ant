<template>
  <div id="form-body">
    <div id="form-header">
      <mu-appbar title="蚂蚁速递"></mu-appbar>
      <Stepper v-show="isShowStepper"></Stepper>
    </div>

    <router-view class="view"></router-view>
    <BottomNavigation v-show="isShowBottom"></BottomNavigation>
  </div>
</template>

<script>
  import BottomNavigation from "./components/BottomNavigation.vue"
  import Stepper from "./components/Stepper.vue"

  export default{
    data(){
      return{
        isShowStepper: true,
        isShowBottom: true
      }
    },

    components:{
      BottomNavigation,
      Stepper
    }
  }
</script>

<style>
  #form-header {
    width: 100%;
  }

  #form-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
</style>


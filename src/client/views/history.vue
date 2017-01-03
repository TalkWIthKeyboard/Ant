<template>
  <div id="user-package-main">
    <Tabs></Tabs>
    <div class="main-picture">
      <img :src="history"/>
    </div>
    <mu-list style="height: 100%;">
      <mu-list-item title="0.95kg" describeText="Jan 9, 2016">
        <mu-avatar slot="left" color="#474a4f" backgroundColor="#9e9e9e">上衣</mu-avatar>
      </mu-list-item>
      <mu-list-item title="0.75kg" describeText="Jan 10, 2016">
        <mu-avatar slot="left" color="#474a4f" backgroundColor="#9e9e9e">生活用品</mu-avatar>
      </mu-list-item>
      <mu-list-item title="0.4kg" describeText="Jan 25, 2016">
        <mu-avatar slot="left" color="#474a4f" backgroundColor="#9e9e9e">文具</mu-avatar>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import Tabs from "../components/Tabs.vue"
export default{
  data(){
    return{
      history: "http://oj7mt8loy.bkt.clouddn.com/clinic-history.png"
    }
  },

  components: {
    Tabs
  },

  methods: {

  },

  created: function() {
    this.$parent.isShowStepper = false;
  },

  mounted: function() {
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

<template>
  <div id="user-package-main">
    <Tabs></Tabs>
    <div class="main-picture">
      <img :src="present"/>
    </div>
    <mu-list style="height: 100%;">
      <mu-list-item title="0.95kg" describeText="Jan 9, 2016">
        <mu-avatar slot="left" color="#474a4f" backgroundColor="#9e9e9e">上衣</mu-avatar>
        <mu-icon-button icon="done" @click="sureSending" slot="right"/>
      </mu-list-item>
      <mu-list-item title="0.75kg" describeText="Jan 10, 2016">
        <mu-avatar slot="left" color="#474a4f" backgroundColor="#9e9e9e">生活用品</mu-avatar>
        <mu-icon-button icon="done" @click="sureSending" slot="right"/>
      </mu-list-item>
      <mu-list-item title="0.4kg" describeText="Jan 25, 2016">
        <mu-avatar slot="left" color="#474a4f" backgroundColor="#9e9e9e">文具</mu-avatar>
        <mu-icon-button icon="done" @click="sureSending" slot="right"/>
      </mu-list-item>
    </mu-list>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Tabs from "../components/Tabs.vue"
import present from "../assets/images/present.png"
import Dialog from "../components/InfoDialog.vue"
export default{
  data(){
    return{
      present
    }
  },

  components: {
    Tabs,
    Dialog
  },

  methods: {
    sureSending() {
      this.$children[2].next = '/index';
      this.$children[2].msg = "确认开始运送快递？";
      this.$children[2].dialog = true;
    }
  },

  created: function() {
    this.$parent.isShowStepper = false;
  },

  mounted: function() {
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

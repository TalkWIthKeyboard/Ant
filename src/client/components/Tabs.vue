<template>
    <mu-tabs :value="activeTab" @change="handleTabChange" style="background-color:#7e848c">
        <mu-tab value="tab1" title="已接单" href="#/user/receiving"/>
        <mu-tab value="tab2" title="运送中" href="#/user/sending"/>
        <mu-tab value="tab3" title="历史" href="#/user/history"/>
    </mu-tabs>
</template>

<script>
export default{
  data(){
    return{
      activeTab: 'tab1'
    }
  },

  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<style>

</style>

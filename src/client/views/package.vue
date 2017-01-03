<template>
  <div id="package-main">
    <mu-list style="height: 100%;">
      <mu-list-item title="生活用品" describeText="500 g">
        <mu-avatar icon="restaurant_menu" slot="leftAvatar"/>
        <mu-icon value="send" slot="right"/>
      </mu-list-item>
      <mu-list-item title="生活用品" describeText="300 g">
        <mu-avatar icon="restaurant_menu" slot="leftAvatar"/>
        <mu-icon-button icon="send" @click="open" slot="right"/>
      </mu-list-item>
      <mu-list-item title="文具" describeText="700 g">
        <mu-avatar icon="create" slot="leftAvatar"/>
        <mu-icon value="send" slot="right"/>
      </mu-list-item>
    </mu-list>
    <infoDialog></infoDialog>
  </div>
</template>

<script>
import infoDialog from "../components/InfoDialog.vue"
export default{
  data(){
    return{
      lists: []
    }
  },

  components:{
    infoDialog
  },

  methods: {
    // 模态框弹出
    open () {
      this.$children[1].next = '#/task';
      this.$children[1].msg = "确认传送这个包裹？";
      this.$children[1].dialog = true;
    },

    // 调用api获取数据
    getData: function(params) {
      this.$api.get('api/parcel/path/search', params, function(r) {
        this.lists = r.result;
        console.log(this.lists);
      })
    }
  },

  created: function () {
    this.$parent.isShowStepper = true;
    this.$parent.$children[1].activeStep = 1;
    this.getData(this.$route.params);
  }
}
</script>

<style>
  #package-main {
    height: 100%;
    width:100%;
  }
</style>


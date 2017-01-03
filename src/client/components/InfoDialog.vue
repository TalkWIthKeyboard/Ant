<template>
  <mu-dialog :open="dialog" :title="dialogTitle" @close="close">
    {{ msg }}
    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" primary :href="next" label="确定"/>
  </mu-dialog>
</template>

<script>
export default{
  data(){
    return{
      dialog: false,
      msg: "哈哈哈哈关掉我吧",
      dialogTitle: "提醒",
      next: "#/index"
    }
  },
  components:{

  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    goToAnther() {
      this.close();
      this.$parent.$router.push = ({ path: this.next });
    }
  }
}
</script>

<style>

</style>

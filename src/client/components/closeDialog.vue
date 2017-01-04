<template>
    <mu-dialog :open="dialog" :title="dialogTitle" @close="close">
        {{ msg }}
        <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    </mu-dialog>
</template>

<script>
  export default{
    data(){
      return{
        dialog: false,
        msg: "哈哈哈哈关掉我吧",
        dialogTitle: "提醒"
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
      }
    }
  }
</script>

<style>

</style>

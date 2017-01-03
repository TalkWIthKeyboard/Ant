<template>
  <div id="step-container">
    <mu-stepper :activeStep="activeStep">
      <mu-step>
        <mu-step-label>
          输入行程
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label>
          选择包裹
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label>
          获取任务
        </mu-step-label>
      </mu-step>
    </mu-stepper>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        activeStep: 0
      }
    }
  }
</script>

<style>
  #step-container {
    width: 100%;
    margin: auto;
  }
</style>

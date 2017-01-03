<template>
  <div id="bottom-nav" :class="{'bottom-nav_hide':toggleHide}">
    <div class="bottom-nav-control" @click="togglePanel" :class="{'toggleContral':toggleHide}"></div>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="package" title="运包裹" icon="search" href="#/index"/>
        <mu-bottom-nav-item value="user" title="个人中心" icon="favorite" href="#/user"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>

export default{
  data() {
    return {
      toggleHide: false,
      bottomNav: 'package',
      bottomNavColor: 'package',
    }
  },

  components: {

  },

  methods: {
    handleChange (val) {
      this.bottomNav = val
    },

    togglePanel () {
      this.toggleHide = !this.toggleHide;
    }
  }
}

</script>

<style>
  .bottom-nav-control {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(0,0,0,.8) url("http://oj7mt8loy.bkt.clouddn.com/close_icon.png") no-repeat center;
    background-size: 25px;
    margin-left: 10px;
    margin-bottom: 10px;
    overflow: hidden
  }

  .bottom-nav_hide {
    bottom: -56px !important;
  }

  .toggleContral {
    background: rgba(0,0,0,.8) url("http://oj7mt8loy.bkt.clouddn.com/open_icon.png") no-repeat center;
    background-size: 25px !important;
   }

  #bottom-nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 999;
  }
</style>

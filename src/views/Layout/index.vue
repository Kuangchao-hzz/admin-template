<template>
  <div class="m-layout">
    <m-header></m-header>
    <div class="m-body">
      <m-sidebar collapsed :style="{width: collapsed ? '60px' : '200px'}"></m-sidebar>
      <!--<m-container></m-container>-->
    </div>
  </div>
</template>

<script>
  import MHeader from './MHeader'
  import MSidebar from './MSldebar'
  import MContainer from './MContainer'
  export default {
    components: { MHeader, MSidebar, MContainer },
    data() {
      return{
        collapsed: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.m-layout{
  .m-body{
    position: relative;
    .m-sidebar{
      width: 200px;
      position: fixed;
      left: 0;
      top: 70px;
      bottom: 0;
      overflow: auto;
      transition: all .3s;
      background: #001529;
      padding-top: 15px;
    }
    .m-container{
      width: 100%;
      padding-left: 220px;
    }
  }
}
</style>

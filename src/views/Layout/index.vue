<template>
  <div class="m-layout">
    <m-header></m-header>
    <div class="m-body">
      <m-sidebar></m-sidebar>
      <m-container></m-container>
    </div>
  </div>
</template>

<script>
  import MHeader from './MHeader'
  import MSidebar from './MSldebar'
  import MContainer from './MContainer'
  export default {
    components: { MHeader, MSidebar, MContainer },
  }
</script>

<style lang="scss" scoped>
.m-layout{
  .m-body{
    position: relative;
    .m-sidebar{
      position: fixed;
      left: 0;
      top: 70px;
      bottom: 0;
      overflow: auto;
    }
    .m-container{
      width: 100%;
      padding-left: 220px;
    }
  }
}
</style>

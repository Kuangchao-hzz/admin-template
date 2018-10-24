<template>
  <div id="app">
    <m-layout></m-layout>
  </div>
</template>

<script>
import MLayout from './views/Layout'
export default {
  components: { MLayout },
  name: 'App'
}
</script>

<style lang="scss">
  @import "./assets/css/base";
  html,body, #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f1f1f1;
    line-height: 1;
  }
</style>

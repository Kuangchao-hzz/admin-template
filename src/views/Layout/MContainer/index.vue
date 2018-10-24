<template>
  <div class="m-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="router in handleCurRouter"
                          :key="router.path"
                          :to="{ path: router.path }">{{ router.meta && router.meta.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="m-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "m-container",

    computed: {
      handleCurRouter() {
        return this.$route.matched
      }
    }
  }
</script>

<style lang="scss" scoped>
.m-container{
  padding: 20px;
  /deep/ .el-breadcrumb{
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .m-main{
    background: #fff;
    padding: 20px;
    border-radius: 4px;
  }
}
</style>

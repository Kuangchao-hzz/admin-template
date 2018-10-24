<template>
  <div class="m-sidebar">
    <el-menu :default-active="$route.path" router>
      <el-submenu :index="route.path"
                  v-if="data.length > 0"
                  v-for="route in data" :key="Math.random()">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ route.meta && route.meta.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="route.path + '/' + item.path" v-for="item in route.children"
                        :key="Math.random()">{{ item.meta && item.meta.name }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import asyncRouterMap from '../../../router/asyncRouterMap'
  export default {
    name: "m-sidebar",

    data() {
      return {
        data: []
      }
    },

    created () {
      this.data = asyncRouterMap
    }
  }
</script>

<style lang="scss">
  .m-sidebar{
    .el-menu{
      width: 200px;
    }
  }
</style>

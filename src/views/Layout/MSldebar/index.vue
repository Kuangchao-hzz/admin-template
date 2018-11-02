<template>
  <div class="m-sidebar">
    <Menu v-show="!collapsed" ref="menu" width="auto">
      <template v-for="item in handleAllMenuList">
        <template v-if="item.children && item.children.length > 0">
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
            <m-icon :type="showIcon(item.children[0])"></m-icon>
            <span>{{ showTitle(item.children[0])}}</span>
          </menu-item>
        </template>

        <template v-else>
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
            <m-icon :type="showIcon(item)"></m-icon>
            <span>{{ showTitle(item) }}</span>
          </menu-item>
        </template>
      </template>
    </Menu>

    <div class="menu-collapsed" v-show="collapsed" :list="handleAllMenuList">
      <template v-for="item in handleAllMenuList">
        <collapsed-menu v-if="item.children && item.children.length > 0" @on-click="handleSelect" hide-title
                        :root-icon-size="rootIconSize" :icon-size="iconSize" :parent-item="item"
                        :key="`drop-menu-${item.name}`"></collapsed-menu>
        <Tooltip transfer v-else
                 :content="(item.meta && item.meta.title) || (item.children && item.children[0] && item.children[0].meta.title)"
                 placement="right" :key="`drop-menu-${item.name}`">
          <a @click="handleSelect(getNameOrHref(item, true))" class="drop-menu-a" :style="{textAlign: 'center'}">
            <i class="iconfont" :class="showIcon(item)"></i>
          </a>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
  import asyncRouterMap from '../../../router/asyncRouterMap'
  import SideMenuItem from './side-menu-item.vue'
  import CollapsedMenu from './collapsed-menu.vue'
  import mixin from './mixin'

  export default {
    name: "m-sidebar",
    mixins: [mixin],
    components: {
      SideMenuItem,
      CollapsedMenu
    },

    props: {
      collapsed: {
        type: Boolean
      },
      rootIconSize: {
        type: Number,
        default: 20
      },
      iconSize: {
        type: Number,
        default: 16
      },
    },

    data() {
      return {
        data: []
      }
    },

    computed: {
      handleAllMenuList() {
        return asyncRouterMap.filter(route => route.path !== '*')
      }
    },

    methods: {
      handleSelect (name) {
        this.$emit('on-select', name)
      },
    }
  }
</script>

<style lang="scss">
  .m-sidebar {
    /deep/ .ivu-menu {
      width: 200px;
      &::after{
        background: transparent;
      }
    }
    /deep/ .menu-collapsed{
      .ivu-dropdown{
        width: 100%;
        a{
          display: inline-block;
          padding: 6px 15px;
          width: 100%;
          text-align: center;
          color: #495060;
        }
      }
    }
  }
</style>

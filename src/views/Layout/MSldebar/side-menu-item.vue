<template>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <m-icon :type="showIcon(parentItem)"></m-icon>
      <span>{{ showTitle(parentItem) }}</span>
    </template>
    <template v-for="item in children">
      <template v-if="item.children && item.children.length === 1">
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
          <m-icon :type="showIcon(item.children[0])"></m-icon>
          <span>{{ showTitle(item.children[0]) }}</span>
        </menu-item>
      </template>
      <template v-else>
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
          <m-icon :type="showIcon(item)"></m-icon>
          <span>{{ showTitle(item) }}</span></menu-item>
      </template>
    </template>
  </Submenu>
</template>

<script>
  import mixin from './mixin'
  import itemMixin from './item-mixin'

  export default {
    name: 'SideMenuItem',
    mixins: [mixin, itemMixin]
  }
</script>

<style scoped>

</style>

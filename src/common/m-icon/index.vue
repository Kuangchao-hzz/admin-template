<template>
  <Icon class="iconfont" :type="type" :size="size" v-show="type"></Icon>
</template>

<script>
  export default {
    name: "m-icon",
    props: {
      type: {
        type: String,
        default: ''
      },
      size: {
        type: [Number, String],
        default: 20
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>

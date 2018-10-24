<template>
  <div class="m-header">
    <div class="nav-left">LOGO</div>
    <div class="nav-right">
      <h1>标题</h1>
      <ul>
        <li>欢迎XXX</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "m-header"
  }
</script>

<style lang="scss" scoped>
.m-header{
  height: 40px;
  padding: 15px 0;
  background: #ddd;
  display: table;
  width: 100%;
  .nav-left{
    width: 200px;
    border-right: #fff 1px solid;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .nav-right{
    padding: 0 40px;
    display: table-cell;
    h1{
      float: left;
      line-height: 40px;
      margin: 0;
      padding: 0;
    }
    >ul{
      float: right;
      line-height: 40px;
      margin: 0;
      padding: 0;
    }
  }
}
</style>

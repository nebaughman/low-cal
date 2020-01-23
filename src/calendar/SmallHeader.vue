<template>
  <div class="small-header">
    <slot/>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .small-header {
    color: #505050;
    background-color: #eee;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    border-radius: 2px 2px 0 0;
    line-height: 1.2; /* bootstrap default is 1.5 */
  }

  /*
  .line {
    height : 2px;
    margin : 0 5px;
    background: linear-gradient(to right, transparent 0%, rgba(128,128,128,1) 50%, transparent 100%);
  }
  */
</style>
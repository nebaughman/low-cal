<template>
  <div class="github centered-row">
    <img alt="GitHub" src="./GitHub-Mark-32px.png"/>
    <a href="https://github.com/nebaughman/low-cal">
      <slot>GitHub project</slot> &rarrtl;
    </a>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

  .centered-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .github {
    opacity: 0.2;
    transition: none;
  }

  .github:hover {
    opacity: 1;
    transition: opacity 250ms;
  }

  img {
    width: 16px;
    margin-bottom: 2px; /* meh */
    margin-right: 4px;
  }

  a {
    text-decoration: none;
    color: #000;
  }

</style>
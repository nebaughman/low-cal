<template>
  <span @click="$emit('click', formattedDate)" class="date-link">
    <slot/>
  </span>
</template>

<script>
  import moment from "moment"

  /**
   * Simply surrounds a slot with style (and emits click events)
   */
  export default {

    props: {
      date: {
        type: String|Object, // date string or moment instance
        required: true,
        //validator(value) {
        //  return moment(value, "YYYYMMDD", true).isValid()
        //},
      },
    },

    computed: {
      formattedDate() {
        return moment(this.date).format("YYYYMMDD")
      },
    },
  }
</script>

<style scoped>
  .date-link {
    cursor: pointer;
  }
</style>
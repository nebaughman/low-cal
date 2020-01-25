<template>
  <span @click="handleClick" :class="dateClass">
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

      navigable: {
        type: Boolean,
        default: true,
      },
    },

    computed: {
      eventDate() {
        return moment(this.date).format("YYYYMMDD")
      },

      dateClass() {
        return this.navigable ? "date-link" : false
      },
    },

    methods: {
      handleClick() {
        if (this.navigable) this.$emit("click", this.eventDate)
      },
    },
  }
</script>

<style scoped>
  .date-link {
    cursor: pointer;
  }
</style>
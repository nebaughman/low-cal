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

    emits: ["click-date"],

    props: {
      date: {
        type: [String,Object], // date string or moment instance
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
        return this.navigable ? "clickable" : false
      },
    },

    methods: {
      handleClick() {
        if (this.navigable) this.$emit("click-date", this.eventDate)
      },
    },
  }
</script>

<style scoped src="./common.css"/>

<style scoped>
</style>
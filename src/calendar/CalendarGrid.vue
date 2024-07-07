<template>
  <div class="calendar-grid" :style="gridStyle">
    <calendar
      v-for="month in months"
      :key="month"
      :month-lock="month"
      :day-nav="false"
      :month-nav="false"
      :date-nav="dateNav"
      :date="date"
      @update:date="$emit('update:date', $event)"
    />
  </div>
</template>

/**
 * This component displays a grid of month-locked calendars.
 */
<script>
  import Calendar from "./Calendar.vue"
  import moment from "moment"

  export default {
    name: "CalendarGrid",
    components: {Calendar},

    emits: ["update:date"],

    props: {
      date: {
        type: String,
        required: true,
      },

      startMonth: {
        type: String,
        required: true,
        validator(value) {
          return moment(value, "YYYYMM", true).isValid()
        },
      },

      monthCount: {
        type: Number,
        required: true,
        validator(value) {
          return value > 0
        },
      },

      columns: {
        type: Number,
        required: false,
      },

      /**
       * Whether to allow dates to be clickable, emitting "update:date" event
       */
      dateNav: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      months() {
        const months = []
        const m = moment(this.startMonth, "YYYYMM")
        for (let i = 0; i < this.monthCount; i++) {
          months.push(m.format("YYYYMM"))
          m.add(1, "month")
        }
        return months
      },

      gridStyle() {
        if (!this.columns) return false
        return {
          "grid-template-columns": `repeat(${this.columns}, 1fr)`
        }
      },
    },
  }
</script>

<style scoped>
  .calendar-grid {
    display: grid;
    gap: 32px;
    justify-items: center;
    align-items: start;
    justify-content: center;
    align-content: start;
    /*grid-template-columns: repeat(auto-fill, 180px);*/
    /*grid-template-columns: 1fr 1fr 1fr 1fr;*/
  }
</style>

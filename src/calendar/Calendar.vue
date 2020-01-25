<template>
  <div class="calendar-wrap style-b">
    <small-header v-if="monthLabel || monthNav">
      <div class="d-flex justify-content-between">
        <date-nav v-if="monthNav" :date="prevMonth" icon="backward" :forward="false" @click="handleClick"/>
        <span class="mx-auto">{{ monthLabel }}</span>
        <date-nav v-if="monthNav" :date="nextMonth" icon="forward" :forward="true" @click="handleClick"/>
      </div>
    </small-header>
    <div class="calendar">
      <div
        v-for="config in dateConfig"
        :key="config.date"
        :class="config.class"
        :style="config.style"
      >
        <date-link :date="config.date" :navigable="dateNav" @click="handleClick">{{ config.label }}</date-link>
      </div>
    </div>
    <small-header v-if="dayNav">
      <div class="d-flex justify-content-between">
        <date-nav
          v-if="prevDay"
          :date="prevDay"
          icon="caret-left"
          :label="prevDayLabel"
          :forward="false"
          class="mr-auto"
          @click="handleClick"
        />
        <date-nav
          v-if="nextDay"
          :date="nextDay"
          icon="caret-right"
          :label="nextDayLabel"
          :forward="true"
          class="ml-auto"
          @click="handleClick"
        />
      </div>
    </small-header>
  </div>
</template>

<script>
import SmallHeader from "./SmallHeader"
import {DateComputer} from "./DateComputer"
import DateLink from "./DateLink"
import DateNav from "./DateNav"
import moment from "moment"

export default {

  components: {
    SmallHeader,
    DateLink,
    DateNav,
  },

  data() {
    return {
      computer: new DateComputer().with(this.date),
    }
  },

  model: {
    prop: "date",
    event: "date",
  },

  props: {

    /**
     * The _current_ date. This is the v-model property (see `model`).
     * This component fires "date" events (upon user clicks/navigation).
     * The parent is expected to update this date property to the value
     * indicated in the event. This happens automatically if the parent
     * binds this property with v-model.
     *
     * https://vuejs.org/v2/guide/forms.html#v-model-with-Components
     */
    date: {
      type: String, // YYYYMMDD
      required: true,
      validator(value) {
        return moment(value, "YYYYMMDD", true).isValid()
      },
    },

    /**
     * moment.js date format string to use for the calendar label.
     * This may be empty to omit the label.
     */
    labelFormat: {
      type: String,
      default: "MMM YYYY",
    },

    /**
     * Whether to show the day navigation links
     */
    dayNav: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether to show the month navigation links
     */
    monthNav: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether calendar dates are clickable navigation links
     */
    dateNav: {
      type: Boolean,
      default: false,
    },
  },

  computed: {

    monthLabel() {
      return this.labelFormat ? this.computer.format(this.labelFormat) : ""
    },

    dateConfig() {
      return this.computer.daysInMonth.map(it => ({
        date: it.format("YYYYMMDD"),
        class: this.dateClass(it),
        style: this.dateStyle(it),
        label: this.dateLabel(it),
        current: this.isCurrent(it),
      }))
    },

    prevMonth() {
      return this.computer.prevMonth
    },

    nextMonth() {
      return this.computer.nextMonth
    },

    prevDay() {
      return this.computer.prevDay
    },

    nextDay() {
      return this.computer.nextDay
    },

    prevDayLabel() {
      return this.formatDayLabel(this.prevDay)
    },

    nextDayLabel() {
      return this.formatDayLabel(this.nextDay)
    },
  },

  methods: {
    isCurrent(date) {
      return moment(date).isSame(this.computer.current)
    },

    isInMonth(date) {
      return moment(date).isSame(this.computer.current, "month")
    },

    dateClass(date) {
      const inMonth = this.isInMonth(date)
      const current = this.isCurrent(date)
      return [
        inMonth ? "day" : "empty-day",
        current ? "today" : "not-today",
      ]
    },

    dateStyle(date) {
      return false
    },

    dateLabel(date) {
      return this.isInMonth(date) ? moment(date).format("D") : ""
    },

    formatDate(date) {
      return moment(date).format("YYYYMMDD")
    },

    formatDayLabel(date) {
      return date ? date.format("MMM D") : null
    },

    handleClick(date) {
      this.$emit("date", date)
    },
  },

  watch: {
    date(date) {
      //this.computer.current = date
      this.computer = new DateComputer().with(date)
    },
  },
}
</script>

// https://forum.vuejs.org/t/import-style-file-doesnt-scoped/7479/2
<style scoped src="./common.css"></style>

<style scoped>

  /* Note: Experimenting with css variables; this could be refined. */

  .style-a {
    --bg-color: rgba(0,0,0,0.5);
    --radius: 2px;
    --gap: 1px;
    --padding: 1px 2px;
    --day-color: inherit;
    --day-hover-color: inherit;
    --day-hover-bg: #fff;
    --today-bg: rgba(255, 193, 7, 0.4);
    --today-radius: 50%;
  }

  .style-b {
    --bg-color: transparent;
    --radius: 0;
    --gap: 0;
    --padding: 5px;
    --day-color: #777;
    --day-hover-color: #000;
    --day-hover-bg: rgba(255, 193, 7, 0.1);
    --today-bg: rgba(255, 193, 7, 0.4);
    --today-radius: 50%;
  }

  .calendar-wrap {
    display: inline-block;
    line-height: 1.2; /* bootstrap default is 1.5 */
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(7, fit-content(21px));
    grid-gap: var(--gap);
    justify-items: stretch;
    align-items: stretch;

    border-radius: var(--radius);
    border: var(--gap) solid transparent;
    background-color: var(--bg-color);
  }

  .day {
    color: var(--day-color);
    cursor: default;
    user-select: none;
    font-family: monospace;
    font-size: 13px;
    text-align: center;
    padding: var(--padding);
    border-radius: var(--radius);
    /*background-color: #f8f9fa;*/
  }

  .day-active {
  }

  .day-active:hover {
    color: var(--day-hover-color);
    box-shadow: inset 0 0 1px #000;
    /*background-color: var(--day-hover-bg);*/
  }

  .empty-day {
  }

  .today {
    /*background-color: var(--today-bg);*/
    /*border-radius: var(--today-radius);*/
    border: 1px solid #666;
    border-radius: 4px;
  }

  .not-today {
    border: 1px solid transparent;
    border-radius: 4px;
  }
</style>

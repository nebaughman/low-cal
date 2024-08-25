<template>
  <div class="calendar-wrap style-b">
    <small-header v-if="monthLabel || monthNav">
      <div class="d-flex justify-content-between">
        <date-nav v-if="monthNav" :date="prevMonth" icon="backward" :forward="false" @click-date="handleClick"/>
        <span class="mx-auto">{{ monthLabel }}</span>
        <date-nav v-if="monthNav" :date="nextMonth" icon="forward" :forward="true" @click-date="handleClick"/>
      </div>
    </small-header>
    <div class="calendar">
      <div
        v-for="config in dateConfig"
        :key="config.date"
        :class="config.class"
        :style="config.style"
      >
        <date-link :date="config.date" :navigable="dateNav" @click-date="handleClick">{{ config.label }}</date-link>
      </div>
    </div>
    <small-header v-if="dayNav || todayNav">
      <div class="date-nav">
        <span class="mr-auto">
          <date-nav
            v-if="prevDay && dayNav"
            :date="prevDay"
            icon="caret-left"
            :label="prevDayLabel"
            :forward="false"
            @click-date="handleClick"
          />
        </span>
        <span>
          <font-awesome-icon
            v-if="todayNav"
            icon="calendar-day"
            class="clickable"
            @click="handleToday"
          />
        </span>
        <span class="ml-auto">
          <date-nav
            v-if="nextDay && dayNav"
            :date="nextDay"
            icon="caret-right"
            :label="nextDayLabel"
            :forward="true"
            @click-date="handleClick"
          />
        </span>
      </div>
    </small-header>
  </div>
</template>

<script>
import SmallHeader from "./SmallHeader.vue"
import {DateComputer} from "./DateComputer.ts"
import DateLink from "./DateLink.vue"
import DateNav from "./DateNav.vue"
import moment from "moment"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"

// loading only needed icons
import { library } from "@fortawesome/fontawesome-svg-core"

import {
  faCaretLeft, faCaretRight, faBackward, faForward, faCalendarDay,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faCaretLeft, faCaretRight, faBackward, faForward, faCalendarDay,
)

export default {

  components: {
    FontAwesomeIcon,
    SmallHeader,
    DateLink,
    DateNav,
  },

  data() {
    return {
      computer: new DateComputer(), // set in watcher
    }
  },

  emits: ["update:date"],

  props: {

    /**
     * The _current_ date. This is a v-model property (`v-model:date="..."`).
     * This component fires "date" events (upon user clicks/navigation).
     * The parent is expected to update this date property to the value
     * indicated in the event. This happens automatically if the parent
     * binds this property with v-model:date="...".
     *
     * https://vuejs.org/guide/components/v-model
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
     * Whether to show a link to the current date.
     */
    todayNav: {
      type: Boolean,
      default: false,
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

    /**
     * If specified, the calendar will only show this month, regardless of the current date.
     * Notice that month & day navigation (if enabled) still behaves the same, which might be confusing.
     * The expected use case is to turn off month & day navigation when using monthLock mode.
     */
    monthLock: {
      type: String, // YYYYMM
      required: false,
      validator(value) {
        return moment(value, "YYYYMM", true).isValid()
      },
    },
  },

  computed: {

    monthLabel() {
      if (!this.labelFormat) return ""
      const date = this.monthLock ? moment(this.monthLock, "YYYYMM") : moment(this.date, "YYYYMMDD")
      return date.format(this.labelFormat)
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
      return this.computer.isInMonth(date)
    },

    dateClass(date) {
      const inMonth = this.isInMonth(date)
      const current = inMonth && this.isCurrent(date)
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
      this.$emit("update:date", date)
    },

    handleToday() {
      this.$emit("update:date", moment().format("YYYYMMDD"))
    },
  },

  watch: {
    date: {
      immediate: true,
      handler(date) {
        //this.computer.current = lockedMonth || date
        this.computer = new DateComputer().with(date)
        if (this.monthLock) this.computer.lockedMonth = this.monthLock
      },
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
    --day-color: #999;
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

  .date-nav {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
</style>

<script setup lang="ts">
import { Calendar, CalendarGrid } from "low-cal"
import moment from "moment"
import {ref} from "vue"
import ProjectLink from "./ProjectLink.vue"

const date = ref(moment().format("YYYYMMDD")) // start with today
const monthLock = ref(moment().format("YYYYMM")) // locked to current month
const gridStart = ref(moment().month(0).date(1).format("YYYYMM")) // first of current year

const today = moment().format("YYYYMMDD")

//const version = computed(() => import.meta.env.VITE_APP_VERSION)
const version = LOW_CAL_LIB_VERSION
</script>

<template>
  <div class="centered-column">

    <div class="banner">
      <div class="version">Low-Cal v{{ version }} Demo</div>
      <project-link/>
    </div>

    <div class="title">
      <h2>Low-Cal</h2>
      <small>The low-calorie Vue calendar</small>
    </div>

    <div class="calendars">

      <div class="centered-column">
        <p>Fixed Date</p>
        <calendar class="cal" :date="today"/>
      </div>

      <div class="centered-column">
        <p>Navigable</p>
        <calendar
          class="cal"
          v-model:date="date"
          :day-nav="true"
          :month-nav="true"
          :date-nav="true"
          :today-nav="true"
          label-format="MMM YYYY"
        />
      </div>

      <div class="centered-column">
        <p>Locked Month</p>
        <calendar
          class="cal"
          v-model:date="date"
          :day-nav="false"
          :month-nav="false"
          :date-nav="true"
          label-format="MMM YYYY"
          :month-lock="monthLock"
        />
      </div>

    </div>

    <div class="date-grid">
      <p>Date Grid<br/>(clickable dates)</p>
      <calendar-grid
        v-model:date="date"
        :start-month="gridStart"
        :month-count="12"
        :columns="4"
        :date-nav="true"
      />
    </div>

  </div>
</template>

<style scoped>
.centered-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.calendars {
  display: flex;
  flex-direction: row;
}

.date-grid {
  margin: 48px 0;
}

.date-grid > p {
  margin-bottom: 24px;
  line-height: 1.4;
}

.date {
  margin-bottom: 32px;
}

.cal {
  margin: 0 32px;
}

.title {
  margin: 16px 0 32px 0;
}

h1,h2,h3 {
  margin: 0;
}

.banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
}

.version {
  color: #999;
}

</style>

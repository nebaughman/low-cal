<template>
  <div id="app" class="centered-column">
    <div class="title">
      <h2>Low-Cal</h2>
      <small>The low-calorie Vue calendar</small>
    </div>

    <div class="calendars">

      <div class="centered-column">
        <p>Fixed date</p>
        <calendar class="cal" :date="today"/>
      </div>

      <div class="centered-column">
        <p>Navigable</p>
        <calendar
          class="cal"
          v-model="date"
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
          v-model="date"
          :day-nav="false"
          :month-nav="false"
          :date-nav="true"
          label-format="MMM YYYY"
          :month-lock="monthLock"
        />
      </div>

    </div>

    <div class="date-grid">
      <p>Date Grid (Clickable)</p>
      <calendar-grid
        v-model="date"
        :start-month="gridStart"
        :month-count="12"
        :columns="4"
        :date-nav="true"
      />
    </div>

  </div>
</template>

<script>
  import Vue from "vue"
  import moment from "moment"
  import Calendar from "@/calendar/Calendar"
  import CalendarGrid from "@/calendar/CalendarGrid"

  export default {
    name: "app",
    components: {Calendar, CalendarGrid},

    data() {
      return {
        date: moment().format("YYYYMMDD"), // start with today
        monthLock: moment().format("YYYYMM"), // locked to current month
        gridStart: moment().month(0).date(1).format("YYYYMM"), // first of current year
      }
    },

    computed: {
      formattedDate() {
        return moment(this.date).format("dddd, MMMM Do YYYY")
      },

      today() {
        return moment().format("YYYYMMDD")
      },
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

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
    margin: 64px 0;
  }

  .date {
    margin-bottom: 32px;
  }

  .cal {
    margin: 0 32px;
  }

  .title {
    margin-bottom: 32px;
  }

  h1,h2,h3 {
    margin: 0;
  }
</style>

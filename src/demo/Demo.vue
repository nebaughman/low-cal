<template>
  <div id="app" class="centered-column">

    <project-link/>

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
      <p>Date Grid<br/>(clickable dates)</p>
      <calendar-grid
        v-model="date"
        :start-month="gridStart"
        :month-count="12"
        :columns="4"
        :date-nav="true"
      />
    </div>

    <project-link>Read more at the GitHub project</project-link>

  </div>
</template>

<script>
  import Vue from "vue"
  import moment from "moment"
  import Calendar from "@/calendar/Calendar"
  import CalendarGrid from "@/calendar/CalendarGrid"
  import ProjectLink from "./ProjectLink"

  export default {
    name: "app",
    components: {Calendar, CalendarGrid, ProjectLink},

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
    margin: 48px 0;
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
    margin: 32px 0;
  }

  h1,h2,h3 {
    margin: 0;
  }

</style>

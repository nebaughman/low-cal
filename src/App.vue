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
        <p>Navigable (v-model)</p>
        <calendar
          class="cal"
          v-model="date"
          :day-nav="true"
          :month-nav="true"
          :date-nav="true"
          label-format="MMM D, YYYY"
        />
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import Calendar from "@/calendar/Calendar"
  import moment from "moment"

  export default {
    name: "app",
    components: {Calendar},

    data() {
      return {
        date: moment().format("YYYYMMDD")
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

  .date {
    margin-bottom: 32px;
  }

  .cal {
    margin: 0 16px;
  }

  .title {
    margin-bottom: 32px;
  }

  h1,h2,h3 {
    margin: 0;
  }
</style>

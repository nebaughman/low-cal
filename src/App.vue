<template>
  <div id="app">
    <p>{{ formattedDate }}</p>
    <calendar v-model="date" :day-nav="true" :month-nav="true"/>
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

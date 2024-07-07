<template>
  <date-link v-if="date" :date="date" @click-date="$emit('click-date', $event)">
    <span v-if="label && forward" class="mr-1">{{ label }}</span>
    <fa-icon :icon="icon"/>
    <span v-if="label && !forward" class="ml-1">{{ label }}</span>
  </date-link>
  <span v-else class="text-muted">
    <span v-if="label && forward" class="mr-1">{{ label }}</span>
    <fa-icon :icon="icon"/>
    <span v-if="label && !forward" class="ml-1">{{ label }}</span>
  </span>
</template>

<script>
  import DateLink from "./DateLink.vue"

  export default {
    components: {DateLink},

    emits: ["click-date"],

    props: {
      date: {
        type: [String,Object], // YYYYMMDD or moment
        default: null,
      },

      icon: {
        type: String,
        required: true,
      },

      label: {
        type: String,
        default: null,
      },

      /**
       * Whether this navigates forward (chronologically)
       */
      forward: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>

<style scoped>
  .ml-1 {
    margin-left: 3px;
  }

  .mr-1 {
    margin-right: 3px;
  }
</style>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
// import EventService from "../services/EventService"

export default {
  name: 'EventDetails',
  data() {
    return {
      // event: null,
    }
  },
  props: ['id'],
  created() {
    // fetch event (by id) and set local event data
    // EventService.getEvent(this.id)
    //   .then((response) => {
    //     this.event = response.data
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    this.$store.dispatch('fetchEvent', this.id).catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
  },
  computed: {
    event() {
      return this.$store.state.event
    },
  },
}
</script>

<style scoped></style>

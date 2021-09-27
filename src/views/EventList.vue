<template>
  <div class="home">
    <h1>Events For Good</h1>
    <div class="events">
      <EventCard v-for="event in events" :event="event" v-bind:key="event.id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "../components/EventCard.vue"
// import EventService from "../services/EventService"

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      // events: this.$store.state.events,
    }
  },
  created() {
    // get events from mock db when component  is created
    // EventService.getEvents()
    //   .then((response) => {
    //     this.events = response.data
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    this.$store.dispatch("fetchEvents")
  },
  computed: {
    events() {
      return this.$store.state.events
    },
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

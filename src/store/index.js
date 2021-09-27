import { createStore } from 'vuex'
import EventService from '../services/EventService.js'

export default createStore({
  state: {
    user: 'Tony Liu',
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch((error) => {
          throw error
        })
    },

    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((response) => {
          commit('SET_EVENTS', response.data)
        })
        .catch((error) => {
          throw error
        })
    },

    // fetchEvent({ commit }, id) {
    //   EventService.getEvent(id)
    //     .then((response) => {
    //       commit("SET_EVENT", response.data)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },

    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find((event) => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        return EventService.getEvent(id)
          .then((response) => {
            commit('SET_EVENT', response.data)
          })
          .catch((error) => {
            // console.log(error)
            throw error
          })
      }
    },
  },
  modules: {},

  computed: {
    events() {
      return this.$store.state.events
    },
  },
})

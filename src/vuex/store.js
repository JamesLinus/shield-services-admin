import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  apps: [
    {
      title: "Deus Ex",
      description: "Futuristic coolness",
      hubs: [
        { id: 1, name: "Global", status: 1},
        { id: 2, name: "China (iQiyi)", status: 1}
      ]
    },
    {
      title: "Grand Theft Auto V",
      description: "Steal things!",
      hubs: [
        { id: 1, name: "Global", status: 1},
        { id: 2, name: "China (iQiyi)", status: 0}
      ]
    },
    {
      title: "Xcom 2",
      description: "Oh no, aliens!",
      hubs: [
        { id: 1, name: "Global", status: 1},
        { id: 2, name: "China (iQiyi)", status: 0}
      ]
    },
    {
      title: "Final Fantasy VI",
      description: "What a clown...",
      hubs: [
        { id: 1, name: "Global", status: 0},
        { id: 2, name: "China (iQiyi)", status: 1}
      ]
    },
    {
      title: "Minecraft",
      description: "Disappointment engine.",
      hubs: [
        { id: 1, name: "Global", status: 1},
        { id: 2, name: "China (iQiyi)", status: 1}
      ]
    }
  ],
  activeApp: {}
}

const mutations = {
  EDIT_APP_HUBS (state, index, status) {
    state.activeApp.hubs[index].status = status
  },

  SET_ACTIVE_APP (state, app) {
    state.activeApp = app
  }
}

export default new Vuex.Store({
  state,
  mutations
})

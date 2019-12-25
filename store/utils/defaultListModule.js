export default (resource) => ({
  defaultState: {
    list: [],
    loading: false,
    lastLoad: null,
    failOnLoad: false,
  },
  defaultGetters: {
    list: (state) => state.list,
    loading: (state) => state.loading,
    lastLoad: (state) => state.lastLoad,
    failOnLoad: (state) => state.failOnLoad,
  },
  defaultActions: {
    async get({ commit }, { page = 1, limit = 10 }) {
      commit('startListLoad')
      try {
        const list = await this.$axios.$get(
          `/${resource}?page=${page}&limit=${limit}`,
        )
        commit('updateListLoad', list)
      } catch {
        commit('setLoadAsFail')
      }
      commit('stopListLoad')
    },
  },
  defaultMutations: {
    startListLoad(state) {
      state.failOnLoad = false
      state.loading = true
      return state
    },
    stopListLoad(state) {
      state.loading = false
      return state
    },
    setLoadAsFail(state) {
      state.failOnLoad = true
      return state
    },
    updateListLoad(state, list) {
      state.list = list
      state.lastLoad = new Date()
      return state
    },
  },
})

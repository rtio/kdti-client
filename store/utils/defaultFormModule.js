import validate from 'validate.js'

export default (resource) => ({
  defaultState: {
    loading: false,
    errors: {},
  },
  defaultGetters: {
    loading: ({ loading }) => loading,
    errors: ({ errors }) => errors,
    hasErrors: ({ errors }) => Object.keys(errors).length > 0,
  },
  defaultActions: {
    async save({ commit }, { id, ...data }, rules) {
      commit('setError', {})
      const errors = validate(data, rules)
      if (errors) {
        commit('setError', errors)
      } else {
        commit('startLoad')
        try {
          if (id) {
            await this.$axios.$post(`${resource}/${id}`, data)
          } else {
            await this.$axios.$post(`/${resource}`, data)
          }
        } catch (e) {
          if (e.response && e.response.data) {
            commit('setError', {
              0: e.response.data.message,
              ...e.response.data.errors,
            })
          } else {
            commit('setError', {
              0: 'Ocorreu um erro inesperado',
            })
          }
        }
        commit('stopLoad')
      }
    },
  },
  defaultMutations: {
    startLoad(state) {
      state.errors = {}
      state.loading = true
      return state
    },
    stopLoad(state) {
      state.loading = false
      return state
    },
    setError(state, errors) {
      state.errors = errors
      return state
    },
  },
})

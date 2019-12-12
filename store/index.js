import Cookie from 'js-cookie'

export const state = () => {
  return {
    auth: null,
  }
}
export const mutations = {
  setAuth(state, auth) {
    Cookie.set('auth', auth)
    state.auth = auth
  },
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      try {
        auth = JSON.parse(Cookie.get('auth'))
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
}

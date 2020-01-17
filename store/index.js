import Cookie from 'js-cookie'

const parseCookies = (cookie, key) => {
  const output = {}
  cookie.split(/\s*;\s*/).forEach(function(pair) {
    pair = pair.split(/\s*=\s*/)
    output[pair[0]] = pair.splice(1).join('=')
  })
  return output[key]
}

export const state = () => ({
  auth: Cookie.get('auth'),
})

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
        auth = parseCookies(req.headers.cookie, 'auth')
      } catch (err) {}
    }
    commit('setAuth', auth)
  },
}

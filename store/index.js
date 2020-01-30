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
  token: Cookie.get('token'),
  id: Cookie.get('id'),
  name: Cookie.get('name'),
  email: Cookie.get('email'),
  logo: Cookie.get('logo'),
})

export const mutations = {
  setUserData(state, userData) {
    if (!userData) {
      removeCookie()
      return
    }
    setCookie(state, userData)
  },
}

const removeCookie = () => {
  Cookie.remove('token')
  Cookie.remove('id')
  Cookie.remove('name')
  Cookie.remove('email')
  Cookie.remove('logo')
}

const setCookie = (state, userData) => {
  const { token, data: { id, name, email, logo } = {} } = userData || {}
  Cookie.set('token', token)
  Cookie.set('id', id)
  Cookie.set('name', name)
  Cookie.set('email', email)
  Cookie.set('logo', logo)
  state.token = token
  state.id = id
  state.name = name
  state.email = email
  state.logo = logo
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      try {
        const userDataFromToken = {
          token: parseCookies(req.headers.cookie, 'token'),
          data: {
            id: parseCookies(req.headers.cookie, 'id'),
            name: parseCookies(req.headers.cookie, 'name'),
            email: parseCookies(req.headers.cookie, 'email'),
            logo: parseCookies(req.headers.cookie, 'logo'),
          },
        }
        commit('setUserData', userDataFromToken)
      } catch (err) {}
    } else {
      commit('setUserData', null)
    }
  },
}

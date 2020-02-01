import Cookie from 'js-cookie'
import { atob } from 'abab'

const parseCookies = (cookie, key) => {
  const output = {}
  cookie.split(/\s*;\s*/).forEach(function(pair) {
    pair = pair.split(/\s*=\s*/)
    output[pair[0]] = pair.splice(1).join('=')
  })
  return output[key]
}

export const state = () => ({
  token: parsedToken(),
  id: Cookie.get('id'),
  name: Cookie.get('name'),
  email: Cookie.get('email'),
  logo: Cookie.get('logo'),
})

const parsedToken = () => {
  const cookieToken = Cookie.get('token')
  return cookieToken ? JSON.parse(atob(cookieToken.split('.')[1])) : null
}

export const mutations = {
  setAuth(state, auth) {
    if (!auth) {
      removeCookie()
      return
    }
    setCookie(state, auth)
  },
}

const removeCookie = () => {
  Cookie.remove('token')
  Cookie.remove('id')
  Cookie.remove('name')
  Cookie.remove('email')
  Cookie.remove('logo')
}

const setCookie = (state, auth) => {
  const { token, data: { id, name, email, logo } = {} } = auth || {}
  Cookie.set('token', token)
  Cookie.set('id', id)
  Cookie.set('name', name)
  Cookie.set('email', email)
  Cookie.set('logo', logo)
  state.token = JSON.parse(atob(token.split('.')[1]))
  state.id = id
  state.name = name
  state.email = email
  state.logo = logo
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      try {
        const authFromToken = {
          token: parseCookies(req.headers.cookie, 'token'),
          data: {
            id: parseCookies(req.headers.cookie, 'id'),
            name: parseCookies(req.headers.cookie, 'name'),
            email: parseCookies(req.headers.cookie, 'email'),
            logo: parseCookies(req.headers.cookie, 'logo'),
          },
        }
        commit('setAuth', authFromToken)
      } catch (err) {}
    } else {
      commit('setAuth', null)
    }
  },
}

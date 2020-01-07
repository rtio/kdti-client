import defaultListModule from './utils/defaultListModule'

const {
  defaultState,
  defaultGetters,
  defaultActions,
  defaultMutations,
} = defaultListModule('job-offers')

export const state = () => ({ ...defaultState })
export const getters = { ...defaultGetters }
export const actions = {
  ...defaultActions,
  async get(context) {
    await defaultActions.get.bind(this)(context, { limit: 6 })
  },
}
export const mutations = { ...defaultMutations }

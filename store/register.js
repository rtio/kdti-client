import defaultFormModule from './utils/defaultFormModule'

const {
  defaultState,
  defaultGetters,
  defaultActions,
  defaultMutations,
} = defaultFormModule('company/registration')

export const state = { ...defaultState }
export const getters = { ...defaultGetters }
export const actions = { ...defaultActions }
export const mutations = { ...defaultMutations }

import createRepository from '~/api/repository'
export default (ctx, inject) => {
  // And in the Vue instances (this.$repository in your components)
  const repositoryWithAxios = createRepository(ctx.$axios)

  ctx.$axios.interceptors.request.use(
    (config) => {
      if (ctx.store.state.auth) {
        config.headers.common.Authorization = `Bearer ${ctx.store.state.auth}`
      }
      return config
    },
    (error) => Promise.reject(error),
  )

  inject('eventRepository', repositoryWithAxios('/events'))
  inject('jobRepository', repositoryWithAxios('/job-offers'))
  inject('accountRepository', {
    auth(payload) {
      return ctx.$axios.$post('login/check', payload)
    },
  })
}
